import { Elysia, t } from "elysia";

const body = t.Object({
  someKey: t.Optional(t.String()),
  someOtherKey: t.Optional(t.Number()),
  requiredKey: t.Array(t.Integer(), { maxItems: 3 }),
  nullableKey: t.Union([t.Number(), t.Null()]),
  multipleTypesKey: t.Union([t.Boolean(), t.Number()]),
  multipleRestrictedTypesKey: t.Union([
    t.String({ maxLength: 5 }),
    t.Number({ minimum: 10 }),
  ]),
  enumKey: t.Union([t.Literal("John"), t.Literal("Foo")]),
}, { required: ['requiredKey'] });


const query = t.Object({
  name: t.Optional(t.String()),
  excitement: t.Optional(t.String()),
});

const params = t.Object({
  par1: t.Optional(t.String()),
  par2: t.Optional(t.Number()),
});

const headers = t.Object({
  'x-foo': t.String(),
}, { required: ['x-foo'] });


const app = new Elysia()
  .post("/hello/:par1/:par2", () => ({ message: "Hello, World" }), {
    body,
    query,
    params,
    headers,
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
