FROM node:slim

WORKDIR /auth

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]