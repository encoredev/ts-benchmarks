import Fastify from "fastify";
const fastify = Fastify({
  logger: false,
});

// Declare a route
fastify.get("/hello", async function handler(request, reply) {
  return { message: "Hello, World" };
});

// Run the server!
try {
  await fastify.listen({ port: 3030 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
