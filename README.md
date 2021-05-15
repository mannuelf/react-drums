[![Netlify Status](https://api.netlify.com/api/v1/badges/3bbcdd3c-4e8b-40ec-b4b4-30959f6893bf/deploy-status)](https://app.netlify.com/sites/fervent-goodall-afea11/deploys)

Love for coding, music and learning new technology in one project.

## Demo URL

> [https://react-drum-maschine.netlify.app/](https://react-drum-maschine.netlify.app/)

## Local dev

### Front-end

This is a mono-repo and is using YARN workspaces, all yarn commands to be executed from the root of project using root package.json.

```bash
yarn install
```

```bash
yarn start
```

```bash
yarn test
```

```bash
yarn build
```

### Server

using [Prisma](https://www.prisma.io/) ORM to handle database workflow.

First time init, run migrations.

```bash
yarn migrate:db
```

Open Studio to view you database contents.

```bash
yarn studio:db
```

open: [http://localhost:5555/](http://localhost:5555/)

## TODO

[x] mono repo, with yarn workspace
[] add tests to frontend
[] build a backend in [using GraphQL][] frontend build filter to switch out sound banks
[] frontend midi device support to play with midi api
