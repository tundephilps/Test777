"use server";

import { createSafeAction } from "@/lib/create-safe-action";
import { http } from "@/lib/http";
import { Response } from "@/types/api-schema/schema";
import { ProviderGamesSchema } from "./schema";
import { InputType, ProviderGamesData, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {
  try {
    const { slagId, page = 1 } = data;

    const response = await http.get<Response<ProviderGamesData>>(
      `/api/searchGames?provider_name=${slagId}&page=${page}`,
    );

    if (!response.success || !response.data) {
      return {
        error:
          typeof response.error === "string"
            ? response.error
            : "Failed to fetch provider games",
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

export const getProviderGames = createSafeAction(ProviderGamesSchema, handler);
