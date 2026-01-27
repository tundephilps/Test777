"use server";

import { createSafeAction } from "@/lib/create-safe-action";
import { http } from "@/lib/http";
import { Response } from "@/types/api-schema/schema";
import { SearchFavoritesSchema } from "../schema";
import {
  SearchFavoritesData,
  SearchFavoritesInput,
  SearchFavoritesReturnType,
} from "../types";

const handler = async (
  data: SearchFavoritesInput,
): Promise<SearchFavoritesReturnType> => {
  try {
    const { query, page = 1 } = data;

    const response = await http.get<Response<SearchFavoritesData>>(
      `/api/player/getFavoriteGames?page=${page}${
        query ? `&search=${encodeURIComponent(query)}` : ""
      }`,
    );

    if (!response.success || !response.data) {
      return {
        error:
          typeof response.error === "string"
            ? response.error
            : "Failed to fetch favorite games",
        status: response.status,
      };
    }

    return {
      data: response,
      status: response.status,
    };
  } catch (error) {
    return {
      error: "Internal Error",
      status: 500,
    };
  }
};

export const getFavoriteGames = createSafeAction(
  SearchFavoritesSchema,
  handler,
);
