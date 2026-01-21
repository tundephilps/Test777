import { z } from "zod";

export const GameSchema = z.object({
  page: z.number().optional(),
  type: z.string().optional(),
});

export const GetGamesByType = GameSchema;
export const GetTournamentGames = GameSchema;
export const GetFreeSpinGames = GameSchema;

export const PlayGameSchema = z.object({
  slug: z.string(),
});
