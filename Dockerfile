FROM node:14.18.2-alpine3.14 as build

WORKDIR ./

COPY . .

RUN npm install
CMD [ "npm", "start" ]
