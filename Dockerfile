FROM node:8

RUN adduser test

WORKDIR /usr/src/app
RUN chmod 777 /usr/src/app

COPY . /usr/src/app

RUN apt-get update

RUN npm -v
RUN node -v
RUN npm install -g @angular/cli@1.6.0
RUN npm install package.json
WORKDIR /usr/src/app/server
EXPOSE 4200
ENV PATH=/home/node.npm-global/bin:$PATH

RUN ng serve