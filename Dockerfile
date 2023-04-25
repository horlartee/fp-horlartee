FROM node:14

EXPOSE 80

WORKDIR /srv/api
ADD . /srv/api

RUN npm install --production

CMD ["node", "api.mjs"]
