FROM node:slim

WORKDIR /users

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]