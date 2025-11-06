FROM python:3.14-slim-trixie

WORKDIR /backend
COPY . .

EXPOSE 5000

RUN apt update && apt install python3-dev default-libmysqlclient-dev build-essential pkg-config -y
RUN pip3 install -r ./requirements.txt
ENTRYPOINT [ "python3", "run.py" ]