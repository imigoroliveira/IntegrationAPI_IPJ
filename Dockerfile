FROM node:lts-alpine

RUN mkdir -p /home/node/apione/node_modules && chown -R node:node /home/node/apione

WORKDIR /home/node/apione

COPY /apione/package.json yarn.* ./

USER node

COPY --chown=node:node . .

EXPOSE 3333
