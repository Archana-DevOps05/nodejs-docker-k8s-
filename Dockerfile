FROM node:16-alpine

WORKDIR /usr/src/app

COPY . ./

RUN npm install --production

EXPOSE 5000

CMD ["npm", "start"]
