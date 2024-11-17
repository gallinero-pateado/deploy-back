FROM node:20

COPY ./package.json ./package-lock.json app.js .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]