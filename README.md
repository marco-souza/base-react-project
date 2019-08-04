# base-react-project

This project is a running react project production-ready.

To see the documentation using Docz, clone the repository, access its folder and run

```sh
yarn && yarn docz:dev
```

**or** check the `/docs` folder above to see the Markdown files.

Have a nice coding! 😎

## App requirements
`docker`
`docker-compose`

Check the `docker` vs `docker-compose` [compatibility matrix](https://docs.docker.com/compose/compose-file/compose-versioning/#compatibility-matrix) to make sure your running version of docker supports the compose version specified in `./docker-compose.yml` at the root of this repo.

## How to?

### Run the app
`docker-compose up app`

### Access the running app
The app container will be listening to HTTP requests on port 9000.
Open a web browser and navigate to `http://localhost:9000`

---

## Running locally

Set your env first. Go to your `.zshrc` or `.bashrc` and append the following variables:

```
# Devopness variables
export NODE_ENV=development
export SRC_PATH=src/app/index.js
export BUILD_DIR=$HOME/devopness-web-app/public/
export APP_RESOLVE=src/app
export ASSETS_RESOLVE=src/assets
export MODULES_RESOLVE=node_modules
export APP_HTML=src/assets/index.pug
export APP_LOGO=src/assets/images/logo.png
export APP_TITLE="My awesome motherfucker pwa!"
```bash

Use `source` at your terminal config file or open a new terminal and try to run the app locally =D.