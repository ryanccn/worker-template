import { Hono } from "hono";

export type Bindings = Record<string, never>;
export type Variables = Record<string, never>;

const app = new Hono<{
	Bindings: Bindings;
	Variables: Variables;
}>();

app.get("/", (c) => c.text("hello world!"));

export default app;
