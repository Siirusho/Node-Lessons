FROM node:14.17.4

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .

ENV PORT 4100
EXPOSE $PORT
CMD npm run start