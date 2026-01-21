"use server";

import { createSafeAction } from "@/lib/create-safe-action";
import { http } from "@/lib/http";
import { Response } from "@/types/api-schema/schema";
import { PlayGameSchema } from "../schema";
import { PlayGameInput, PlayGameReturnType } from "../types";

const playHandler = async (
  data: PlayGameInput,
): Promise<PlayGameReturnType> => {
  const { slug } = data;
  try {
    const response = await http.post<Response<any>, any>(
      `/api/player/play/${slug}`,
      {},
    );

    if (!response.success || !response.data) {
      return {
        error:
          typeof response.error === "string"
            ? response.error
            : "Failed to load game",
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

const demoHandler = async (
  data: PlayGameInput,
): Promise<PlayGameReturnType> => {
  const { slug } = data;
  try {
    const response = await http.post<Response<any>, any>(
      `/api/player/play/${slug}/demo`,
      {},
    );

    if (!response.success || !response.data) {
      return {
        error:
          typeof response.error === "string"
            ? response.error
            : "Failed to load demo game",
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

export const playGame = createSafeAction(PlayGameSchema, playHandler);
export const playDemoGame = createSafeAction(PlayGameSchema, demoHandler);
