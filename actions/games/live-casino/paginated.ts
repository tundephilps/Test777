"use server";

import { createSafeAction } from "@/lib/create-safe-action";
import { http } from "@/lib/http";
import { GamesByTypeResponse, Response } from "@/types/api-schema/schema";
import { GetGamesByType } from "../schema";
import { InputType, LiveCasinoGamesReturnType } from "../types";

const handler = async (data: InputType): Promise<LiveCasinoGamesReturnType> => {
  const { page = 1 } = data;
  try {
    const response = await http.get<Response<GamesByTypeResponse>>(
      `/api/getGamesByType/live-casino?page=${page}`,
    );

    if (!response.success || !response.data) {
      return {
        error:
          typeof response.error === "string"
            ? response.error
            : "Failed to fetch live casino games",
        status: response.status,
      };
    }

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return {
      error: "Internal Error",
      status: 500,
    };
  }
};

export const getLiveCasinoGamesByType = createSafeAction(
  GetGamesByType,
  handler,
);
