# bug-report-otel-nestjs

## Description

[Nest](https://github.com/nestjs/nest) repository to illustrate a bug with otel context propagation: Querying an endpoint won't propagate the traceID to the next endpoint, or in the response.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# app listens on 3002
open http://localhost:3002/hello
```

## Architecture

The app is composed of 3 GET endpoints:
- GET `/`: return a simple string
- GET `/hello`: calls the `/world` endpoint and return a combinaison of results
- GET `/world`: return a simple string.

