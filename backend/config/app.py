from flask import Flask
from .settings import project_path

app: Flask = Flask(str(project_path))