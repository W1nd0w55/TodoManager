from .app import app
from endpoints import example

app.add_url_rule('/example', view_func=example.example)