FROM node:8.11.3

WORKDIR /src/app

COPY . package.json

COPY . .

RUN npm install

EXPOSE 4000

CMD "npm" "start"