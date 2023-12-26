FROM node:18.18-alpine3.17

WORKDIR /app

COPY . .

RUN npm install pm2 -g
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["pm2" "start" "--name=trello-ui" "npm -- run preview"]