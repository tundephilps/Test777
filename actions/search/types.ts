import { ActionState } from "@/lib/create-safe-action";
import {
  Game,
  PaginatedResponse,
  ProvidersResponse,
  Response,
} from "@/types/api-schema/schema";
import { z } from "zod";
import {
  SearchFavoritesSchema,
  SearchGamesSchema,
  SearchProvidersSchema,
} from "./schema";

// Input Types
export type SearchGamesInput = z.infer<typeof SearchGamesSchema>;
export type SearchProvidersInput = z.infer<typeof SearchProvidersSchema>;
export type SearchFavoritesInput = z.infer<typeof SearchFavoritesSchema>;

// Data Types
export type SearchGamesData = PaginatedResponse<Game[]>;
export type SearchProvidersData = ProvidersResponse;
export type SearchFavoritesData = PaginatedResponse<Game[]>;

// Return Types
export type SearchGamesReturnType = ActionState<
  SearchGamesInput,
  Response<SearchGamesData>
>;
export type SearchProvidersReturnType = ActionState<
  SearchProvidersInput,
  Response<SearchProvidersData>
>;
export type SearchFavoritesReturnType = ActionState<
  SearchFavoritesInput,
  Response<SearchFavoritesData>
>;
