const start = process.hrtime.bigint()

const fastify = require('fastify')
const server = fastify();

server.get("/1", {
  schema: {
    querystring: {
      q1: { type: "string" },
      excitement: { type: "integer" },
    }
  }
}, (_req, reply) => reply.send({ message: "Hello, World" }));

server.get("/2", {
  schema: {
    querystring: {
      q2: { type: "string" },
      excitement: { type: "integer" },
    }
  }
}, (_req, reply) => reply.send({ message: "Hello, World" }));

server.get("/3", {
  schema: {
    querystring: {
      q3: { type: "string" },
      excitement: { type: "integer" },
    }
  }
}, (_req, reply) => reply.send({ message: "Hello, World" }));

server.get("/4", {
  schema: {
    querystring: {
      q4: { type: "string" },
      excitement: { type: "integer" },
    }
  }
}, (_req, reply) => reply.send({ message: "Hello, World" }));

server.get("/5", {
  schema: {
    querystring: {
      q5: { type: "string" },
      excitement: { type: "integer" },
    }
  }
}, (_req, reply) => reply.send({ message: "Hello, World" }));

server.get("/6", {
  schema: {
    querystring: {
      q6: { type: "string" },
      excitement: { type: "integer" },
    }
  }
}, (_req, reply) => reply.send({ message: "Hello, World" }));

server.get("/7", {
  schema: {
    querystring: {
      q7: { type: "string" },
      excitement: { type: "integer" },
    }
  }
}, (_req, reply) => reply.send({ message: "Hello, World" }));

server.get("/8", {
  schema: {
    querystring: {
      q8: { type: "string" },
      excitement: { type: "integer" },
    }
  }
}, (_req, reply) => reply.send({ message: "Hello, World" }));

server.get("/9", {
  schema: {
    querystring: {
      q9: { type: "string" },
      excitement: { type: "integer" },
    }
  }
}, (_req, reply) => reply.send({ message: "Hello, World" }));

server.get("/10", {
  schema: {
    querystring: {
      q10: { type: "string" },
      excitement: { type: "integer" },
    }
  }
}, (_req, reply) => reply.send({ message: "Hello, World" }));

// Run the server!
server.listen({ port: 0 }, () => {
  const listenTime = process.hrtime.bigint()
  console.log("server started up in ", listenTime-start, "ns");
  server.close()
})

