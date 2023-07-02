import { Hono } from "hono";

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface Env {}

const app = new Hono();

app.get("/", (c) => c.text("hello world!"));

export default app;
