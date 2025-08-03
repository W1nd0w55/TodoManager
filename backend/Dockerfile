FROM debian

RUN apt update && apt install python3-django -y

WORKDIR /backend

COPY . /backend

EXPOSE 8000

ENTRYPOINT [ "python3", "./manage.py", "runserver", "0.0.0.0:8000" ]
