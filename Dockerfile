# syntax=docker/dockerfile:1

FROM python:3.8-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . .

ENV FLASK_APP /app/GROCERY_PREDIC_UPDATED/proj_groc.py

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
