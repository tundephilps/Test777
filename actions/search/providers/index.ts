"use server";

import { createSafeAction } from "@/lib/create-safe-action";
import { http } from "@/lib/http";
import { Response } from "@/types/api-schema/schema";
import { SearchProvidersSchema } from "../schema";
import {
  SearchProvidersData,
  SearchProvidersInput,
  SearchProvidersReturnType,
} from "../types";

const handler = async (
  data: SearchProvidersInput,
): Promise<SearchProvidersReturnType> => {
  try {
    const { query } = data;

    const response = await http.get<Response<SearchProvidersData>>(
      `/api/searchGameProvider?search=${encodeURIComponent(query)}`,
    );

    if (!response.success || !response.data) {
      return {
        error:
          typeof response.error === "string"
            ? response.error
            : "Failed to search providers",
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

export const searchProviders = createSafeAction(SearchProvidersSchema, handler);
