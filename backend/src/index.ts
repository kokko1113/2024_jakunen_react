import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { categories } from "./routes/categories";
import { posts } from "./routes/posts";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = new Hono();

// CORS Settings
app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST"],
    allowHeaders: ["Content-Type"],
  })
);

// ヘルスチェックエンドポイント
app.get("/", (c) => {
  return c.json({ message: "API Server is running" });
});

// ガイドページ
app.get("/guide", async (c) => {
  const html = await readFileSync(
    path.join(__dirname, "./pages/guide.html"),
    "utf-8"
  );
  return c.html(html);
});

// 静的ファイル配信設定
app.use("/*", serveStatic({ root: "./static" }));

// API Routes
app.route("/api/posts", posts);
app.route("/api/categories", categories);

// 404 Handler
app.notFound((c) => {
  return c.json(
    {
      error: "エンドポイントが見つかりません",
    },
    404
  );
});

// Error Handler
app.onError((err, c) => {
  console.error("サーバーエラー:", err);
  return c.json(
    {
      error: "サーバー内部エラーが発生しました",
    },
    500
  );
});

const port = parseInt(process.env.PORT ?? "3001");
console.log(`🔄 API Server is starting on http://localhost:${port}`);
serve({
  fetch: app.fetch,
  port,
});
console.log(`🚀 API Server is running on http://localhost:${port}`);
