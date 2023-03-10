FROM debian:buster-slim 
RUN apt-get update && \
    apt-get install -y python3 python3-pip
RUN pip3 install --upgrade pip
COPY main.py .
COPY requirements.txt .

# install requirements
RUN pip3 install -r requirements.txt