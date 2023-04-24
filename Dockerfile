#FROM node:12.16.3-alpine3.9
#
#RUN mkdir -p /var/www/dockerize-nuxt/nuxt-app
#WORKDIR /var/www/dockerize-nuxt/nuxt-app
#
#COPY package*.json ./
#RUN npm install
#
#COPY . .
#
#RUN npm run build
#
#EXPOSE 3030
#
#ENV NUXT_HOST=0.0.0.0
#
#ENV NUXT_PORT=3030
#
#CMD [ "npm", "start" ]

FROM node:18-alpine

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY ./package*.json /app/

RUN npm install && npm cache clean --force

COPY . .

ENV PATH ./node_modules/.bin/:$PATH
