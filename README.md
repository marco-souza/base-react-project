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
