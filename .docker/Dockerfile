# Dockerfile for production build
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN yarn --frozen-lockfile

RUN yarn build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist /app

RUN yarn global add serve

EXPOSE 80

ENTRYPOINT ["serve", "-l", "80", "/app"]