"use strict";
module.exports = {
  keys: "murray",
  security: {
    csrf: false
  },
  middleware: ["errorHandler", "uppercase"],
  errorHandler: {
    match: "/api"
  },
  cors: {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  },
  view: {
    defaultViewEngine: "nunjucks",
    mapping: {
      ".html": "nunjucks"
    }
  },
  mongoose: {
    url: `mongodb://${process.env.MONGO_PORT_27017_TCP_ADDR ||
      "127.0.0.1"}/murray`,
    options: {
      server: {
        auto_reconnect: true,
        poolSize: 10
      }
    }
  },
  io: {
    init: {},
    namespace: {
      "/": {
        connectionMiddleware: ["auth"],
        packetMiddleware: ["filter"]
      }
    }
  },
  redis: {
    client: {
      port: process.env.REDIS_PORT_6379_TCP_PORT || 6379,
      host: process.env.REDIS_PORT_6379_TCP_ADDR || "127.0.0.1",
      password: null,
      db: 0
    }
  },
  oAuth2Server: {
    debug: true,
    grants: [
      "password",
      "authorization_code",
      "refresh_token",
      "client_credentials"
    ]
  }
};
