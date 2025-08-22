import type { Comment } from "@prisma/client";
import z from "zod";

export const commentSchema = z
  .object({
    id: z.number().int(),
    postId: z.number().int(),
    author: z.string(),
    content: z.string(),
    createdAt: z.date(),
  })
  .brand("comment") satisfies z.ZodType<Comment>;
