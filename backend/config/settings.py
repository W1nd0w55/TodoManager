from pathlib import Path, PosixPath, WindowsPath
from os import environ

PROJECT_PATH: Path | PosixPath | WindowsPath = Path(__file__).resolve().parent.parent
SECRET_KEY:  str | None = environ.get('SECRET_KEY')

DB_HOST:     str        = '10.69.42.104'
DB_USER:     str | None = environ.get('MYSQL_USER')
DB_PASSWORD: str | None = environ.get('MYSQL_PASSWORD')
DB_NAME:     str | None = environ.get('MYSQL_DATABASE')
DB_URI:      str = f'mysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}'