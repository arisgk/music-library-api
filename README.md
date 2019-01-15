# Music Library API

Playground project implementing a music library RESTful API. Built with [Node.js](https://nodejs.org).

Check out a [deployed version of the API](http://aris-music-library-api.eu-west-1.elasticbeanstalk.com/songs). It is deployed using [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/).

The API currently serves a single route, `/songs`, which returns the list of all available songs in the library.

Songs are uploaded to [Amazon S3](https://aws.amazon.com/s3/) and served using [Amazon CloudFront](https://aws.amazon.com/cloudfront/).

# Quick Start

## Prerequisites

Define an .env file at the root directory of the project containing all the environment variables needed. You can find the keys needed for the env vars key-value pairs in the [configuration](https://github.com/arisgk/music-library-api/blob/master/src/config/index.js) file.

## Using Docker

You can use Docker to start the app locally. The [Dockerfile](https://github.com/arisgk/music-library-api/blob/master/Dockerfile) and the [docker-compose.yml](https://github.com/arisgk/music-library-api/blob/master/docker-compose.yml) are already provided for you. Navigate to project root folder and run the following command to start the server:

```
docker-compose up
```

## Using npm

You will need to [download and install Node.js and npm](https://nodejs.org/en/download/) in order to use this method. Navigate to project root folder and run the following commands to start the server:

```
npm install
npm start
```

# Testing

Navigate to project root folder and run:

```
npm test
```

# Architectural Decisions

The app is designed to use a layered architecture. The architecture is heavily influenced by the [Clean Architecture](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). It aims to separate concerns and make the app easier to test and maintain. This also makes it easier to replace a routing framework or a data store, as the core business rules are independent of these layers implementation. Specifically, the following simple division is applied in the app structure:

- [domain](https://github.com/arisgk/music-library-api/tree/master/src/domain) folder contains modules defining the core entities (models) and business rules (services) of the app. They are the least likely to change when something external (e.g database, routing) changes and thus do not depend on external components. In our use case, this layer will not change if songs are fetched from an external API instead of a JSON file. This increases extensibility and maintainability.

- [router](https://github.com/arisgk/music-library-api/tree/master/src/router) folder contains modules concerned with HTTP routing (routes, HTTP specifics like requests, responses, headers, params validation etc). Routing is implemented using Express.js but we can easily swap it with another framework.

- [websockets](https://github.com/arisgk/music-library-api/tree/master/src/websockets) folder contains modules concerned with WebSockets interface. [Socket.IO](https://socket.io/) is used to handle WebSockets communication.

- [data](https://github.com/arisgk/music-library-api/tree/master/src/data) folder contains modules (repositories) concerned with data fetching and posting tasks. There are examples for fetching data from both a JSON file and an external service (Amazon S3).

# Routing

[Express](https://expressjs.com/) web framework is used to handle routing.

# WebSockets

[Socket.IO](https://socket.io/) is used to handle WebSockets communication.

# Code Style

[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) with [Airbnb style guide](https://github.com/airbnb/javascript).

# Possible Extensions

- Complete the songs CRUD and add artists and album support
- Add users and access management / authentication mechanism. Song URLs can be [signed](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-signed-urls.html) in order to only be available to authorized users.
- Document the API using [Swagger](https://swagger.io/)
- Add continuous integration and deployment (e.g deploy using [CircleCI](https://circleci.com/))
