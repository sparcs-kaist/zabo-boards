# Zabo Boards

## About
Zabo Boards helps **KAIST students based** individuals or clubs advertising themselves via TV screen in open space.
While this service is open for public, **only approved groups** are able to post images.
Please submit your request in order to create a new group via our website.

This project is being maintained by [SPARCS KAIST](https://github.com/sparcs-kaist)

We're expecting our users post there recruiting announcements, performance schedules, and any other events advertisments.
However, there's no strict restrictions on contents that users upload.

Please contact us to get more detailed information.

If you're looking for backend codes, you can find it in [here](https://github.com/sparcs-kaist/zabo-server-nodejs)

## Table of Contents

## Prerequisites

**You'll need to have Node 18.18.2 in local development and production machine**

You can use [fnm](https://github.com/Schniz/fnm). That's all you need.

```shell
$ node -v // v18.18.2
```

## Getting Started

### Running Development Server

Run server
```shell
$ cp .env.example .env.development // copy config 

$ vim .env.development // setup configuration

$ yarn // Installing dependencies

$ yarn dev // used vite for project configuration. yarn dev will run vite development server
```

### Running Production Server
```shell
$ // check if there is a zabo-boards package in sparcs-kaist organization
$ git clone https://github.com/sparcs-kaist/zabo-boards.git // clone repo
$ cp .env.example .env.production // copy config 
$ docker compose -p zabo-boards -f .docker/docker-compose.yaml up -d // run zabo boards server

```