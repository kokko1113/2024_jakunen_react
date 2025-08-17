import type z from "zod";
import type { postCreateSchema, postSchema } from "../schemas/post";

export type Post = z.infer<typeof postSchema>;

export type PostInput = z.infer<typeof postCreateSchema>;
