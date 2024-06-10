# Benchmarks

## Methodology

We benchmarked Encore, Bun, Fastify, and Express, both with and without schema validation.

For schema validation we used Zod where possible. In the case of Fastify we used Ajv as the officially supported schema validation library.

For each benchmark we took the best result of five runs. Each run was performed by making as many requests as possible with 150 concurrent workers, over 10s. The load generation was performed with [oha](https://github.com/hatoo/oha), a Rust and Tokio-based HTTP load testing tool.

## Load testing

With schema validation:

```bash
PORT=3030 oha -c 150 -z 10s -m POST -H 'Content-Type: application/json' -H 'x-foo: test' "http://127.0.0.1:$PORT/schema?name=test&excitement=123" -d '{"someKey": "test", "someOtherKey": 123, "requiredKey": [123, 456, 789], "nullableKey": null, "multipleTypesKey": true, "multipleRestrictedTypesKey": "test", "enumKey": "John"}'
```

Without schema validation:

```bash
PORT=3030 oha -c 150 -z 10s -m GET "http://127.0.0.1:$PORT/hello"
```