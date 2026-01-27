import { z } from "zod";

export const FavoriteGameSchema = z.object({
  gameId: z.number(),
});
