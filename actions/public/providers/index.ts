"use server";

import { createSafeAction } from "@/lib/create-safe-action";
import { http } from "@/lib/http";
import { ProvidersResponse, Response } from "@/types/api-schema/schema";
import { ProvidersSchema } from "./schema";
import { InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {
  try {
    const response = await http.get<Response<ProvidersResponse>>(
      "/api/getAllGameProviders",
    );

    if (!response.success || !response.data) {
      return {
        error:
          typeof response.error === "string"
            ? response.error
            : "Failed to fetch game providers",
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

export const getAllProviders = createSafeAction(ProvidersSchema, handler);
