const start = process.hrtime.bigint()

const express = require('express');
const z = require('zod');

const app = express();
const PORT = 3030;

app.use(express.json({ limit: "50mb" }));

const s1 = z.object({
  q1: z.string(),
  excitement: z.number(),
});

app.get("/1", async (req, res) => {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  s1.parse(searchParams);
  res.send(JSON.stringify({ message: "Hello, World!" }));
});

const s2 = z.object({
  q2: z.string(),
  excitement: z.number(),
});

app.get("/2", async (req, res) => {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  s2.parse(searchParams);
  res.send(JSON.stringify({ message: "Hello, World!" }));
});

const s3 = z.object({
  q3: z.string(),
  excitement: z.number(),
});

app.get("/3", async (req, res) => {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  s3.parse(searchParams);
  res.send(JSON.stringify({ message: "Hello, World!" }));
});

const s4 = z.object({
  q4: z.string(),
  excitement: z.number(),
});

app.get("/4", async (req, res) => {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  s4.parse(searchParams);
  res.send(JSON.stringify({ message: "Hello, World!" }));
});

const s5 = z.object({
  q5: z.string(),
  excitement: z.number(),
});

app.get("/5", async (req, res) => {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  s5.parse(searchParams);
  res.send(JSON.stringify({ message: "Hello, World!" }));
});

const s6 = z.object({
  q6: z.string(),
  excitement: z.number(),
});

app.get("/6", async (req, res) => {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  s6.parse(searchParams);
  res.send(JSON.stringify({ message: "Hello, World!" }));
});

const s7 = z.object({
  q7: z.string(),
  excitement: z.number(),
});

app.get("/7", async (req, res) => {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  s7.parse(searchParams);
  res.send(JSON.stringify({ message: "Hello, World!" }));
});

const s8 = z.object({
  q8: z.string(),
  excitement: z.number(),
});

app.get("/8", async (req, res) => {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  s8.parse(searchParams);
  res.send(JSON.stringify({ message: "Hello, World!" }));
});

const s9 = z.object({
  q9: z.string(),
  excitement: z.number(),
});

app.get("/9", async (req, res) => {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  s9.parse(searchParams);
  res.send(JSON.stringify({ message: "Hello, World!" }));
});

const s10 = z.object({
  q10: z.string(),
  excitement: z.number(),
});

app.get("/10", async (req, res) => {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  s10.parse(searchParams);
  res.send(JSON.stringify({ message: "Hello, World!" }));
});

app.listen(PORT, (error) => {
  const listenTime = process.hrtime.bigint()
  console.log("server started up in ", listenTime - start, "ns");
});
