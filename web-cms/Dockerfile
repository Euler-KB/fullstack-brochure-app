FROM node:16-alpine

WORKDIR /app

COPY ./package*.json ./

RUN yarn install

COPY . .

EXPOSE 1337

CMD ["yarn","run", "develop"]
