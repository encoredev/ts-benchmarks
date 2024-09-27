import { Hono } from 'hono'

const app = new Hono()

app.get('/hello', (c) => {
  return c.json({ message: 'Hello, World' })
})

export default app
