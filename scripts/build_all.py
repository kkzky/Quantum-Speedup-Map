"""Rebuild the JSON catalogue, SQLite database, plots, and linked pages."""
import subprocess
import sys
from pathlib import Path

root = Path(__file__).resolve().parents[1]
for script in ['build_full_catalogue.py', 'build_database.py', 'build_plot_data.py', 'build_demo.py']:
    subprocess.run([sys.executable, str(root / 'scripts' / script)], cwd=root, check=True)
