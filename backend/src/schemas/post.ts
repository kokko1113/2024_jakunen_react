import type { Post, Prisma } from "@prisma/client";
import z from "zod";

export const postSchema = z
	.object({
		id: z.number().int(),
		title: z.string(),
		content: z.string(),
		category: z.string(),
		author: z.string(),
		likes: z.number().int().default(0),
		commentCount: z.number().int().default(0),
		createdAt: z.date().default(new Date()),
		imageUrl: z.string().nullable(),
	})
	.brand("post") satisfies z.ZodType<Post>;

export const postCreateSchema = z
	.object({
		title: postSchema.shape.title.min(1),
		content: postSchema.shape.content.min(1),
		author: postSchema.shape.author.min(1),
		category: postSchema.shape.category.min(1),
		imageUrl: postSchema.shape.imageUrl.nullable(),
	})
	.brand("post_create") satisfies z.ZodType<Prisma.PostCreateInput>;
