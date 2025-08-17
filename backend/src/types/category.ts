import type z from "zod";
import type { categorySchema } from "../schemas/category";

export type Category = z.infer<typeof categorySchema>;
