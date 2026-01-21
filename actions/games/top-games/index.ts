"use server";

import { createSafeAction } from "@/lib/create-safe-action";
import { http } from "@/lib/http";
import { Response } from "@/types/api-schema/schema";
import { GameSchema } from "../schema";
import { GameData, InputType, ReturnType } from "../types";

const handler = async (data: InputType): Promise<ReturnType> => {
  try {
    const response = await http.get<Response<GameData>>("/api/getTopGames");

    if (!response.success || !response.data) {
      return {
        error:
          typeof response.error === "string"
            ? response.error
            : "Failed to fetch top games",
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

export const getTopGames = createSafeAction(GameSchema, handler);
