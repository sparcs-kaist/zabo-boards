# Dockerfile for production build
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

RUN yarn global add serve

EXPOSE 80

ENTRYPOINT ["serve", "-l", "80", "/app/dist"]