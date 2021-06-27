# React-drums

[![Netlify Status](https://api.netlify.com/api/v1/badges/3bbcdd3c-4e8b-40ec-b4b4-30959f6893bf/deploy-status)](https://app.netlify.com/sites/fervent-goodall-afea11/deploys)

Love for coding, music and learning new technology in one project.

Inspired by: [JavaScript30](https://javascript30.com/)

## Demo URL

> [https://react-drum-maschine.netlify.app/](https://react-drum-maschine.netlify.app/)

## Local dev

This is a mono-repo and is using YARN workspaces, all yarn commands to be executed from the root of project using root package.json.

```bash
yarn 
```

### Run in development mode

This will start the react client, GraphQL server and prisma db studio using concurrently.

```bash
yarn dev 
```

### Test react client

```bash
yarn test:client
```

### Front-end docs

[Click here](./client/README.md) to read documentation.

### GraphQL Server docs

[Click here](./server/README.md) to read documentation.

## TODO

[Click here](./todo.md) to read todo list.
