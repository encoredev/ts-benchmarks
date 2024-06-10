import z from "zod";

// convert this schema to Zod:
/*
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
*/

const bodySchema = z.object({
  someKey: z.string().optional(),
  someOtherKey: z.number().optional(),
  requiredKey: z.array(z.number()).max(3),
  nullableKey: z.number().nullable().optional(),
  multipleTypesKey: z.union([z.boolean(), z.number()]).optional(),
  multipleRestrictedTypesKey: z
    .union([z.string().max(5), z.number().min(10)])
    .optional(),
  enumKey: z.enum(["John", "Foo"]).optional(),
});

const queryStringSchema = z.object({
  name: z.string().optional(),
  excitement: z.number().optional(),
});

const headersSchema = z.object({
  "x-foo": z.string(),
});

const server = Bun.serve({
  port: 3040,
  async fetch(request) {
    const { searchParams } = new URL(request.url);

    // Validate the request body, querystring, and headers
    const bodyData = await Bun.readableStreamToJSON(request.body!);
    const body = bodySchema.parse(bodyData);
    // const headers = headersSchema.parse(request.headers);
    const queryString = queryStringSchema.parse(searchParams);
    return Response.json({ message: "Hello, World" });
  },
});
