from config.app import app
import config.urls # Applies routes
from time import sleep

def main() -> None:
    sleep(5) # Wait for MySQL to initialise
    app.run('0.0.0.0', debug=True)

if __name__ == '__main__':
    main()