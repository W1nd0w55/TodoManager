FROM python:3.14-slim-trixie

WORKDIR /backend
COPY . .

EXPOSE 5000

RUN pip3 install -r ./requirements.txt
ENTRYPOINT [ "python3", "run.py" ]