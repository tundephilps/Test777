"use server";

import { createSafeAction } from "@/lib/create-safe-action";
import { http } from "@/lib/http";
import { Response } from "@/types/api-schema/schema";
import { FavoriteGameSchema } from "./schema";
import { FavoriteResponse, InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {
  try {
    // Use gameId in URL path like the old implementation
    const response = await http.post<Response<FavoriteResponse>, {}>(
      `/api/player/removeFavorite/${data.gameId}`,
      {},
    );

    console.log("removeFavorite API response:", response);

    // Check if the API call was successful (status 200)
    if (response.status === 200 && response.success !== false) {
      return {
        status: response.status,
        data: response.data || { message: "Game removed from favorites" },
      };
    }

    // Handle error response
    const errorMessage = response.error;

    if (typeof errorMessage === "object" && errorMessage !== null) {
      const errObj = errorMessage as { message?: string };
      return {
        status: response.status,
        error: errObj.message || "Failed to remove game from favorites.",
      };
    }

    return {
      status: response.status,
      error:
        typeof errorMessage === "string"
          ? errorMessage
          : "Failed to remove game from favorites.",
    };
  } catch (error) {
    console.error("removeFavorite exception:", error);
    return {
      status: 500,
      error: "Unable to connect to the server. Please try again.",
    };
  }
};

export const removeFavorite = createSafeAction(FavoriteGameSchema, handler);
