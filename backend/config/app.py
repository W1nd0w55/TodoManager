from flask import Flask
from .settings import *

app: Flask = Flask(str(PROJECT_PATH))
app.secret_key = SECRET_KEY
app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True