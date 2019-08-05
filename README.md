# Devopness

[![pipeline status](https://gitlab.com/devopness/devopness-web-app/badges/devel/pipeline.svg)](https://gitlab.com/devopness/devopness-web-app/commits/devel)

This project is a running react project production-ready.

## Running the app with docker-compose

The best way to run this application it's by using docker-compose. Use the following steps to run it in your machine.

### App requirements

Install:

- `docker`
- `docker-compose`

Check the `docker` vs `docker-compose` [compatibility matrix](https://docs.docker.com/compose/compose-file/compose-versioning/#compatibility-matrix) to make sure your running version of docker supports the compose version specified in `./docker-compose.yml` at the root of this repo.

### How to?

After installing the packages mentioned above in your system you use the following commands: 

```sh
# Run in development mode
docker-compose up

# Run only the app
docker-compose up app

# To build a local image of the app
docker build -t devopness .

# Then run it
docker run devopness
```
Access the running app
The app container will be listening to HTTP requests on port 9000.
Open a web browser and navigate to `http://localhost:9000`

---

## Running locally

Set your env first. Go to your `.zshrc` or `.bashrc` and append the following variables:

```sh
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
```

Use `source` at your terminal config file or open a new terminal and try to run the app locally =D.

To see the documentation using Docz, clone the repository, access its folder and run

```sh
yarn && yarn docz:dev
```

Basic commands

```sh
# Build the project under ./public/ directory
yarn build

# Start a local server for the app
yarn start
```

Check the `/docs` folder above to see the Markdown files.
Have a nice coding! 😎