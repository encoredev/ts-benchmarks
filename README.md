# Benchmarks

![Benchmark Results](./results.png)

## Instructions for benchmarking Encore

To properly benchmark Encore in an apples-to-apples comparison with other frameworks,
set the following environment variables:

```bash
export ENCORE_LOG=off  # to disable request logging
export ENCORE_NOTRACE=1  # to disable request tracing
export ENCORE_RUNTIME_LOG=debug  # to retrieve API server port information
```

Next, you must ensure to **not** benchmark the `4000` port that `encore run` uses by default,
as this port goes through two layers of proxies (first the Encore daemon itself, and then the API Gateway).

Instead, you should benchmark the port that the API server is listening on, which will be printed
as a log statement when the Encore server starts up.

For example:
```bash
$ ENCORE_LOG=off ENCORE_NOTRACE=1 ENCORE_RUNTIME_LOG=debug encore run
[... more logs...]
DBG encore_runtime_core::api::manager > api server listening for incoming requests addr=127.0.0.1:52680
```

In this case, you should benchmark against `http://127.0.0.1:52680`.

## Request Latency

### Methodology

We benchmarked Encore, Bun, Fastify (v4 and v5), Express, Elysia, and Hono. All with and without schema validation.

For schema validation we used Zod or TypeBox where possible. In the case of Fastify we used Ajv as the officially supported schema validation library.

For each benchmark we took the best result of five runs. Each run was performed by making as many requests as possible with 150 concurrent workers, over 10s. The load generation was performed with [oha](https://github.com/hatoo/oha), a Rust and Tokio-based HTTP load testing tool.

### Load testing

With schema validation:

```bash
PORT=3030 oha -c 150 -z 10s -m POST -H 'Content-Type: application/json' -H 'x-foo: test' "http://127.0.0.1:$PORT/schema?name=test&excitement=123" -d '{"someKey": "test", "someOtherKey": 123, "requiredKey": [123, 456, 789], "nullableKey": null, "multipleTypesKey": true, "multipleRestrictedTypesKey": "test", "enumKey": "John"}'
```

Without schema validation:

```bash
PORT=3030 oha -c 150 -z 10s -m GET "http://127.0.0.1:$PORT/hello"
```

See code in the `requests` folder.

## Cold Starts

We benchmarked Encore.ts, Fastify, NestJS and Express.

The program registers 10 API endpoints, each with a simple schema, and sets up schema validation.
For schema validation we used Zod where possible.
In the case of Fastify we used Ajv as the officially supported schema validation library.

We measured the time from when JavaScript code begins executing until the server is ready to accept incoming requests.
For each benchmark we took the best result of five runs.

See code in the `cold-starts` folder.
