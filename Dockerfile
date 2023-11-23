ARG node_version=18.16.0

# Stage 1: Установка зависимостей

FROM node:${node_version} AS deps

LABEL maintainer="anclaev<iahugo@yandex.ru>"
LABEL description="Darcr Web"

WORKDIR /web-client

COPY package.json ./

RUN npm install

# Stage 2: Сборка проекта
FROM node:${node_version} AS builder

COPY . .
COPY --from=deps /web-client/node_modules ./node_modules

RUN npm run build

# Stage 3: Публикация проекта
FROM nginx:1.23.1-alpine

EXPOSE 80

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /dist/darcr-web/browser /usr/share/nginx/html
