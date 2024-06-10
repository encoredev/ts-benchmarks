const server = Bun.serve({
  port: 3040,
  fetch(request) {
    return Response.json({ message: "Hello, World" });
  },
});
