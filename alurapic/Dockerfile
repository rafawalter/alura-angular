FROM node:10.3.0-alpine as alura-angular

# Baseado em https://github.com/johnpapa/docker-angular-cli

#Linux setup
RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

#Angular CLI
RUN npm install -g @angular/cli@6.0.7

# The default port from ng serve (4200)
# and 49153 for Webpack Hot Module Reload
# +1 nas portas default para rodar Alura junto com outro App sendo desenvolvido
EXPOSE 4201 49153