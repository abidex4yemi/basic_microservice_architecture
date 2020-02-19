FROM node:slim

WORKDIR /tasks

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]