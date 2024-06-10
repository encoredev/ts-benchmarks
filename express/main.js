import express from "express";
import z from "zod";

const app = express();
const PORT = 3030;

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

app.use(express.json({ limit: "50mb" }));

app.post("/schema", async (req, res) => {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);

  const body = bodySchema.parse(req.body);
  const queryString = queryStringSchema.parse(searchParams);
  res.status(200);
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify({ message: "Hello, World!" }));
});

app.get("/hello", (req, res) => {
  res.status(200);
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify({ message: "Hello, World!" }));
});

app.listen(PORT, (error) => {
  if (error) {
    console.error("failed to listen", error);
  } else {
    console.log(`Server is listening on port ${PORT}`);
  }
});
