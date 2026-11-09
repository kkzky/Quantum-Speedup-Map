"""Build the SQLite database from the editable JSON records (standard library only)."""
from pathlib import Path
import json
import sqlite3

ROOT = Path(__file__).resolve().parents[1]


def read(name):
    return json.loads((ROOT / 'data' / name).read_text(encoding='utf-8'))


def dump(value):
    return json.dumps(value, ensure_ascii=False)


def main():
    catalogue = read('catalogue.json')
    entries = [read(f'entries/{int(e.split("-")[1]):04}.json') for e in catalogue['entry_order']]
    references, citations, relations = [read(n + '.json') for n in ('references', 'citations', 'relations')]
    output = ROOT / 'data/quantum_speedups.sqlite'
    temporary = output.with_suffix('.sqlite.tmp')
    if temporary.exists():
        temporary.unlink()
    db = sqlite3.connect(temporary)
    db.execute('PRAGMA foreign_keys=ON')
    db.executescript('''
    CREATE TABLE metadata (key TEXT PRIMARY KEY, value_json TEXT NOT NULL);
    CREATE TABLE chapters (id TEXT PRIMARY KEY, number INTEGER UNIQUE NOT NULL, title TEXT NOT NULL,
                           introduction_latex TEXT NOT NULL);
    CREATE TABLE categories (id TEXT PRIMARY KEY, dimension TEXT NOT NULL, label TEXT NOT NULL,
                             color_key TEXT NOT NULL, red INTEGER NOT NULL, green INTEGER NOT NULL, blue INTEGER NOT NULL);
    CREATE TABLE entries (id TEXT PRIMARY KEY, number INTEGER UNIQUE NOT NULL, ordinal INTEGER UNIQUE NOT NULL,
                          chapter_id TEXT NOT NULL REFERENCES chapters(id), title TEXT NOT NULL, title_latex TEXT NOT NULL,
                          problem_name TEXT NOT NULL, problem_name_latex TEXT NOT NULL, problem_latex TEXT NOT NULL,
                          problem_text TEXT NOT NULL, source_latex TEXT NOT NULL, record_json TEXT NOT NULL);
    CREATE TABLE comparisons (entry_id TEXT NOT NULL REFERENCES entries(id), model TEXT NOT NULL CHECK(model IN ('quantum','classical')),
                              headline_latex TEXT NOT NULL, headline_text TEXT NOT NULL, details_latex TEXT NOT NULL,
                              details_text TEXT NOT NULL, PRIMARY KEY(entry_id, model));
    CREATE TABLE entry_labels (entry_id TEXT NOT NULL REFERENCES entries(id), dimension TEXT NOT NULL,
                              category_id TEXT NOT NULL REFERENCES categories(id), description_latex TEXT NOT NULL,
                              description_text TEXT NOT NULL, PRIMARY KEY(entry_id, dimension));
    CREATE TABLE algorithm_items (entry_id TEXT NOT NULL REFERENCES entries(id), item_number INTEGER NOT NULL,
                                  index_label TEXT NOT NULL, content_latex TEXT NOT NULL, content_text TEXT NOT NULL,
                                  PRIMARY KEY(entry_id, item_number));
    CREATE TABLE "references" (id TEXT PRIMARY KEY, title TEXT NOT NULL, title_latex TEXT, external_ids_json TEXT NOT NULL,
                               citation_labels_latex_json TEXT NOT NULL);
    CREATE TABLE reference_links (id INTEGER PRIMARY KEY, reference_id TEXT NOT NULL REFERENCES "references"(id),
                                  url TEXT NOT NULL, kind TEXT NOT NULL, provenance TEXT NOT NULL, metadata_json TEXT NOT NULL,
                                  UNIQUE(reference_id,url,kind,provenance,metadata_json));
    CREATE TABLE citations (id TEXT PRIMARY KEY, entry_id TEXT NOT NULL REFERENCES entries(id),
                           reference_id TEXT NOT NULL REFERENCES "references"(id), section TEXT NOT NULL,
                           algorithm_item_number INTEGER, url TEXT NOT NULL, label_latex TEXT NOT NULL,
                           locator_latex TEXT, context_latex TEXT NOT NULL, start_offset INTEGER NOT NULL, end_offset INTEGER NOT NULL,
                           FOREIGN KEY(entry_id,algorithm_item_number) REFERENCES algorithm_items(entry_id,item_number));
    CREATE TABLE relations (id TEXT PRIMARY KEY, name TEXT NOT NULL, description_latex TEXT NOT NULL, description_text TEXT NOT NULL);
    CREATE TABLE relation_members (relation_id TEXT NOT NULL REFERENCES relations(id), entry_id TEXT NOT NULL REFERENCES entries(id),
                                  PRIMARY KEY(relation_id,entry_id));
    CREATE INDEX citations_by_reference ON citations(reference_id);
    CREATE INDEX citations_by_entry ON citations(entry_id,section);
    CREATE INDEX labels_by_category ON entry_labels(category_id);
    CREATE INDEX relation_members_by_entry ON relation_members(entry_id);
    CREATE VIRTUAL TABLE entry_search USING fts5(id UNINDEXED,title,problem,quantum,classical,labels,algorithms);
    ''')
    for key, value in catalogue.items():
        db.execute('INSERT INTO metadata VALUES (?,?)', (key, dump(value)))
    for c in catalogue['chapters']:
        db.execute('INSERT INTO chapters VALUES (?,?,?,?)', (c['id'], c['number'], c['title'], c['introduction_latex']))
    for c in catalogue['categories']:
        db.execute('INSERT INTO categories VALUES (?,?,?,?,?,?,?)', (c['id'], c['dimension'], c['label'], c['color_key'], *c['rgb']))
    for e in entries:
        p = e['problem']
        db.execute('INSERT INTO entries VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
                   (e['id'],e['number'],e['ordinal'],e['chapter_id'],e['title'],e['title_latex'],p['name'],p['name_latex'],
                    p['statement_latex'],p['statement_text'],e['source_latex'],dump(e)))
        for model, c in e['quantum_speedup'].items():
            db.execute('INSERT INTO comparisons VALUES (?,?,?,?,?,?)', (e['id'],model,c['headline_latex'],c['headline_text'],c['details_latex'],c['details_text']))
        for dimension, l in e['labels'].items():
            db.execute('INSERT INTO entry_labels VALUES (?,?,?,?,?)', (e['id'],dimension,l['category_id'],l['description_latex'],l['description_text']))
        for a in e['algorithm_items']:
            db.execute('INSERT INTO algorithm_items VALUES (?,?,?,?,?)', (e['id'],a['item_number'],a['index_label'],a['content_latex'],a['content_text']))
        q, c = e['quantum_speedup']['quantum'], e['quantum_speedup']['classical']
        db.execute('INSERT INTO entry_search VALUES (?,?,?,?,?,?,?)',
                   (e['id'],e['title'],p['statement_text'],q['headline_text']+' '+q['details_text'],c['headline_text']+' '+c['details_text'],
                    ' '.join(l['description_text'] for l in e['labels'].values()), ' '.join(a['content_text'] for a in e['algorithm_items'])))
    for r in references:
        db.execute('INSERT INTO "references" VALUES (?,?,?,?,?)', (r['id'],r['title'],r['title_latex'],dump(r['external_ids']),dump(r['citation_labels_latex'])))
        for link in r['access_links']:
            db.execute('INSERT OR IGNORE INTO reference_links(reference_id,url,kind,provenance,metadata_json) VALUES (?,?,?,?,?)',
                       (r['id'],link['url'],link['kind'],link['provenance'],dump({k:v for k,v in link.items() if k not in ('url','kind','provenance')})))
    for c in citations:
        db.execute('INSERT INTO citations VALUES (?,?,?,?,?,?,?,?,?,?,?)',
                   tuple(c[k] for k in ('id','entry_id','reference_id','section','algorithm_item_number','url','label_latex','locator_latex','context_latex','start','end')))
    for r in relations:
        db.execute('INSERT INTO relations VALUES (?,?,?,?)', (r['id'],r['name'],r['description_latex'],r['description_text']))
        db.executemany('INSERT INTO relation_members VALUES (?,?)', [(r['id'],eid) for eid in r['entry_ids']])
    assert not db.execute('PRAGMA foreign_key_check').fetchall()
    assert db.execute('SELECT count(*) FROM entries').fetchone()[0] == catalogue['entry_count']
    db.execute('PRAGMA user_version=1')
    db.commit()
    db.execute('VACUUM')
    db.close()
    temporary.replace(output)
    print(f'Built {output.name}: {len(entries)} entries, {len(references)} references, {len(citations)} citations')


if __name__ == '__main__':
    main()
