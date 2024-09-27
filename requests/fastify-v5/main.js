const fastify = require("fastify")({
  logger: false,
});

// Declare a route
fastify.get("/hello", async function handler(request, reply) {
  return { message: "Hello, World" };
});

// Run the server!
fastify.listen({ port: 3030 }).then((address) => {
  console.log(`Server listening on ${address}`);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
