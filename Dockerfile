FROM node:11-alpine

# app
ENV NODE_ENV=development
ENV SRC_PATH=src/app/index.js
ENV BUILD_DIR=/app/public/
# resolvers
ENV APP_RESOLVE=src/app
ENV ASSETS_RESOLVE=src/assets
ENV MODULES_RESOLVE=node_modules
# assets
ENV APP_HTML=src/assets/index.pug
ENV APP_LOGO=src/assets/images/logo.png
ENV APP_TITLE="My awesome motherfucker pwa!"

WORKDIR /app

ADD ./package.json /app/package.json

EXPOSE 9000
EXPOSE 5000
EXPOSE 3000

CMD [ "yarn", "start" ]

RUN yarn install