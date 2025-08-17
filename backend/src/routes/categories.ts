import { Hono } from "hono";
import { prisma } from "../lib/prisma";

const categories = new Hono();

// GET /api/categories - カテゴリ一覧を取得
categories.get("/", async (c) => {
	try {
		const data = await prisma.category.findMany({
			orderBy: {
				id: "asc",
			},
		});
		return c.json(data);
	} catch (error) {
		console.error("カテゴリ一覧取得エラー:", error);
		return c.json([]);
	}
});

export { categories };
