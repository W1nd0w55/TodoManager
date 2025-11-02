# TodoManager
My honest take at a web-based todo app.

# How to run
1. Create .env file containing database credentials
```
echo "POSTGRES_DB: 'db'
POSTGRES_ROOT_PASSWORD: 'SuperSecret@12345'
POSTGRES_USER: 'user'
POSTGRES_PASSWORD: 'LessSecret@12345'" > .env
```
2. Simply `docker-compose up -d`!