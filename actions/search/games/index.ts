"use server";

import { createSafeAction } from "@/lib/create-safe-action";
import { http } from "@/lib/http";
import { Response } from "@/types/api-schema/schema";
import { SearchGamesSchema } from "../schema";
import {
  SearchGamesData,
  SearchGamesInput,
  SearchGamesReturnType,
} from "../types";

const handler = async (
  data: SearchGamesInput,
): Promise<SearchGamesReturnType> => {
  try {
    const { query, page = 1 } = data;

    const response = await http.get<Response<SearchGamesData>>(
      `/api/searchGames?search=${encodeURIComponent(query)}&page=${page}`,
    );

    if (!response.success || !response.data) {
      return {
        error:
          typeof response.error === "string"
            ? response.error
            : "Failed to search games",
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

export const searchGames = createSafeAction(SearchGamesSchema, handler);
