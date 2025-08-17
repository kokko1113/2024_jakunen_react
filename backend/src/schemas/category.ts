import type { Category } from "@prisma/client";
import z from "zod";

export const categorySchema = z
	.object({
		id: z.number(),
		name: z.string(),
	})
	.brand("category") satisfies z.ZodType<Category>;
