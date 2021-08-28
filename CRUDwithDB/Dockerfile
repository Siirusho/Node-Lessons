FROM node:14.17

WORKDIR /CRUD

COPY package*.json ./

RUN npm install
COPY . .

CMD npm run start

