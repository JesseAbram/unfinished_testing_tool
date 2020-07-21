FROM node:12.2.0-alpine

WORKDIR /home/node

COPY --chown=node:node package.json yarn.lock .babelrc /home/node/

USER node

RUN yarn install

COPY --chown=node:node . /home/node/

ENV PORT=3001

EXPOSE $PORT

CMD [ "yarn", "start" ]
