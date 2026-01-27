import { z } from "zod";

export const ProvidersSchema = z.object({
  page: z.number().optional(),
});
