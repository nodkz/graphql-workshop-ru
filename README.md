# Воркшоп по созданию GraphQL сервера на Node.JS и Apollo Client

## ФАК

1. Гит не видит нужных веток

```bash
git fetch origin
```

2. Как подсмотреть решение, не теряя прогресс?

```bash
# Текущая ветка git checkout step0-start
git stash # сохраните изменения
git checkout step0 # перейдите в ветку с решением
git checkout step0-start # вернитесь
git stash apply # загрузите сохранение
```

## Overview (TODO: DRAFT from https://github.com/nikolasburk/graphqlday-workshop)

This git repository contains several branches that correspond to the "steps" to be performed throughout the workshops. The `master` branch contains the final version of the code.

* [Step 0](https://github.com/nikolasburk/graphqlday-workshop/tree/step0): Minimal GraphQL server
* [Step 1](https://github.com/nikolasburk/graphqlday-workshop/tree/step1): Extend API with query arguments
* [Step 2](https://github.com/nikolasburk/graphqlday-workshop/tree/step2): Complete API operations
* [Step 3](https://github.com/nikolasburk/graphqlday-workshop/tree/step3): Add database layer with Prisma and Prisma bindings
* [Step 4](https://github.com/nikolasburk/graphqlday-workshop/tree/step4): Complete API operations against the database

## Usage

### Clone the repository

```bash
git clone git@github.com:nodkz/graphql-workshop-ru.git
cd graphql-workshop-ru
```

### Install packages

TODO: yarn or package-lock?

### Start the server

```bash
nodemon src/index.js
```

### APP Diagramm

See [Northwind models](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data)
