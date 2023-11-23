ARG node_version=18.16.0

# Stage 1: Установка зависимостей

FROM node:${node_version} AS deps

LABEL maintainer="anclaev<iahugo@yandex.ru>"
LABEL description="Darcr Web"

WORKDIR /web-client

COPY package.json ./

RUN yarn global add @angular/cli
RUN yarn install --silent

# Stage 2: Сборка проекта
FROM node:${node_version} AS builder

ENV JQ_VERSION=1.6

RUN wget --no-check-certificate https://github.com/stedolan/jq/releases/download/jq-${JQ_VERSION}/jq-linux64 -O /tmp/jq-linux64
RUN cp /tmp/jq-linux64 /usr/bin/jq
RUN chmod +x /usr/bin/jq

COPY . .
COPY --from=deps /web-client/node_modules ./node_modules

RUN jq 'to_entries | map_values({ (.key) : ("$" + .key) }) | reduce .[] as $item ({}; . + $item)' ./src/assets/config.json > ./src/assets/config.tmp.json && mv ./src/assets/config.tmp.json ./src/assets/config.json

RUN yarn build

# Stage 3: Публикация проекта

FROM nginx:1.23.1-alpine

ENV JSFOLDER=/usr/share/nginx/html/*.js

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ./start-nginx.sh /usr/bin/start-nginx.sh

RUN chmod +x /usr/bin/start-nginx.sh

WORKDIR /usr/share/nginx/html

COPY --from=builder /dist/darcr-web/browser .

EXPOSE 80

ENTRYPOINT [ "start-nginx.sh" ]
