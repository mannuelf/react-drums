# GraphQL server

## Database with Docker only

build it

```bash
docker build -t reactdrums-db .
```

start it:

```bash
docker-compose up -d
```

from ROOT package.json
run prisma generate script

```bash
yarn prisma:generate
```

run migration script

```bash
yarn migrate
```

## Database with Kubernetes

Install [minikube](https://minikube.sigs.k8s.io/docs/start/)

## Database

Start the prostgres container using `kubectl`

```bash
kubectl apply -f database.workload.yml
```

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
