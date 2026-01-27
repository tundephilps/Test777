import { z } from "zod";

export const ProviderGamesSchema = z.object({
  slagId: z.string(),
  page: z.number().optional().default(1),
});
