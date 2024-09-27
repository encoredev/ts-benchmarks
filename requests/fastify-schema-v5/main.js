const fastify = require("fastify")({
  logger: false,
});

const bodyJsonSchema = {
  type: "object",
  required: ["requiredKey"],
  properties: {
    someKey: { type: "string" },
    someOtherKey: { type: "number" },
    requiredKey: {
      type: "array",
      maxItems: 3,
      items: { type: "integer" },
    },
    nullableKey: { type: ["number", "null"] },
    multipleTypesKey: { anyOf: [{ type: "boolean" }, { type: "number" }] },
    multipleRestrictedTypesKey: {
      oneOf: [
        { type: "string", maxLength: 5 },
        { type: "number", minimum: 10 },
      ],
    },
    enumKey: {
      type: "string",
      enum: ["John", "Foo"],
    },
    notTypeKey: {
      not: { type: "array" },
    },
  },
};

const queryStringJsonSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    excitement: { type: "integer" },
  },
};

const paramsJsonSchema = {
  type: "object",
  properties: {
    par1: { type: "string" },
    par2: { type: "number" },
  },
};

const headersJsonSchema = {
  type: "object",
  properties: {
    "x-foo": { type: "string" },
  },
  required: ["x-foo"],
};

const schema = {
  body: bodyJsonSchema,
  querystring: queryStringJsonSchema,
  params: paramsJsonSchema,
  headers: headersJsonSchema,
};

const handler = (request, reply) => {
  reply.send({ message: "Hello, World" }); // echo the querystring
};

fastify.post("/schema", { schema }, handler);

// Run the server!
fastify.listen({ port: 3030 }).then((address) => {
  console.log(`Server listening on ${address}`);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
