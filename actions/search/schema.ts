import { z } from "zod";

// Search Games Schema
export const SearchGamesSchema = z.object({
  query: z.string(),
  page: z.number().optional().default(1),
});

// Search Providers Schema
export const SearchProvidersSchema = z.object({
  query: z.string(),
});

// Search Favorites Schema (reuses existing GameSchema pattern)
export const SearchFavoritesSchema = z.object({
  query: z.string().optional(),
  page: z.number().optional().default(1),
});
