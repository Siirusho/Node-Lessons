FROM node:current

RUN npm install -g nodemon

WORKDIR /HW_11

COPY src /HW_11/src/

COPY package.json package-lock.json /HW_11/

RUN npm install

CMD npm run start