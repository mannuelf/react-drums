# React-drums

[![Netlify Status](https://api.netlify.com/api/v1/badges/b1e813fa-c4ab-404f-b0a2-002f87f6e8bd/deploy-status)](https://app.netlify.com/sites/react-drum-machine/deploys)

Love for coding, music and learning new technology in one project, anything goes, I will try anything that seems interesting to this repo.

It is a web version of this (approximation 🥁)

![photo](.github/workflows/machinemicro.png)

## Requirements

- [PNPM](pnpm.io/installation)
- [Docker](https://docker.com) (it's for the database)
- [NVM](https://github.com/nvm-sh/nvm)

## Overview

- React + Vite SPA
- Apollo GraphQL server
- Prisma ORM
- Postgresql db using Docker

## Demo

> [www.react-drum-machine.netlify.app](https://react-drum-machine.netlify.app/)

## Getting started

Switch to Node v20

```bash
nvm use
```

Uses [pnpm workspaces](https://pnpmpkg.com/features/workspaces). Client and Server.

1. Run server scripts first
2. Run client scripts second

## Server

Ensure Docker is on and start the Postgresql container first.

OR stop now and use [SQLITE here](https://www.prisma.io/docs/orm/overview/databases/sqlite)

### Database with Docker

cd to the server directory and run these commands:

```bash
docker build -t reactdrums-db .
```

start it:

```bash
docker-compose up -d
```

Prisma generate and migrate

```bash
pnpm db:generate
```

```bash
pnpm db:migrate:dev
```

### Client

Install dependencies:

```bash
pnpm install
```

Development

```bash
pnpm dev
```
