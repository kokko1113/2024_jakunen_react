import { Hono } from "hono";
import { prisma } from "../lib/prisma";
import { postCreateSchema, postDetailsSchema, postSchema } from "../schemas/post";
import { commentSchema } from "../schemas/comment";
import type { PostInput } from "../types/post";

const posts = new Hono();

// GET /api/posts - Post一覧を取得
posts.get("/", async (c) => {
  try {
    const data = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    const posts = postSchema.array().parse(data);

    return c.json(posts);
  } catch (error) {
    console.error("Post一覧取得エラー:", error);
    return c.json([]);
  }
});

// GET /api/posts/:id - 個別のPostを取得
posts.get("/:id", async (c) => {
  try {
    const id = Number(c.req.param("id"));
    if (!id || Number.isNaN(id)) throw null;

    const data = await prisma.post.findUnique({
      where: { id },
      include: { comments: { orderBy: { createdAt: "asc" } } },
    });
    if (!data) throw null;

    const post = postDetailsSchema.parse({ ...data });

    return c.json(post);
  } catch (error) {
    console.error("Post取得エラー:", error);
    return c.json({
      error: "データの取得に失敗しました",
    });
  }
});

// POST /api/posts - 新しいPostを作成
posts.post("/", async (c) => {
  try {
    const body = await c.req.json<PostInput>();
    const data = postCreateSchema.parse(body);
    // const newPost = await prisma.post.create({ data });
    const newPost = data;

    return c.json(newPost);
  } catch (error) {
    console.error("Post作成エラー:", error);
    return c.json({
      error:
        "タイトルは必須です, 内容は必須です, 投稿者名は必須です, カテゴリは必須です",
    });
  }
});

export { posts };
