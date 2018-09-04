FROM node:10.3.0-alpine as alura-angular-api

#Linux setup
RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

WORKDIR /usr/app/

COPY . .

RUN npm install
RUN npm start

EXPOSE 3000