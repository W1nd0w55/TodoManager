FROM debian

RUN apt update && apt install python3-pip -y
RUN pip install django --break-system-packages

WORKDIR /backend
COPY . .

EXPOSE 8000

ENTRYPOINT [ "python3", "./manage.py", "runserver", "0.0.0.0:8000" ]
