FROM node:20.10.0-alpine3.19 AS build

WORKDIR /usr/src/app

# Copy files
COPY ./src ./src
COPY ./package.json .
COPY ./package-lock.json .
COPY ./tsconfig.json .
COPY ./tsconfig.build.json .
COPY ./nest-cli.json .

# Install dependencies
RUN npm install
RUN npm run build --prod

ENV NODE_ENV production

# PROD STAGE
FROM node:20.10.0-alpine3.19 AS prod

WORKDIR /usr/src/app

# Copy src folder
COPY --from=build /usr/src/app/src ./src
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/tsconfig.json .

# Copy package.json and package-lock.json
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/package-lock.json ./package-lock.json

# Install packages for migration
RUN npm i dotenv
RUN npm i typeorm

# Update packages
RUN apk upgrade

# Change permissions
RUN chown -R node:node /usr/src/app

# User to execute
USER node

EXPOSE 3000

CMD ["sh", "-c", "npm run migration:run && node dist/main"]