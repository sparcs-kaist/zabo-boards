# Dockerfile for production build
FROM node:18-alpine

WORKDIR /app

COPY ./dist/ /app/

RUN npm install --global serve

EXPOSE 80

ENTRYPOINT ["serve", "-l", "80", "/app"]