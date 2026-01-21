"use server";

import { createSafeAction } from "@/lib/create-safe-action";
import { http } from "@/lib/http";
import { GameSchema } from "../schema";
import { InputType, ReturnType } from "../types";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { page = 1 } = data;
  try {
    const response = await http.get<ReturnType["data"]>(
      `/api/player/getFavoriteGames?page=${page}`,
    );

    if (!response.success || !response.data) {
      console.error("[getFavoriteGames] Error:", response);
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
    console.error("[getFavoriteGames] Exception:", error);
    return {
      error: "Internal Error",
      status: 500,
    };
  }
};

export const getFavoriteGames = createSafeAction(GameSchema, handler);
