from config.app import app
import config.urls # Applies routes

if __name__ == '__main__':
    app.run("0.0.0.0", debug=True)