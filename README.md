# TodoManager
My honest take at a web-based todo app.

# How to run
1. Create .env file containing database credentials:
```
echo "MYSQL_ROOT_PASSWORD: 'uhh...secret'
MYSQL_USER: 'backend'
MYSQL_PASSWORD: 'less-secret'
MYSQL_DATABASE: 'db'
SECRET_KEY: '898989898989''" > .env
```
2. Simply `docker-compose up -d`!