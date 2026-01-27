"use server";

import { createSafeAction } from "@/lib/create-safe-action";
import { http } from "@/lib/http";
import { Response } from "@/types/api-schema/schema";
import { GetTournamentsSchema } from "../schema";
import {
  GetTournamentsData,
  GetTournamentsInput,
  GetTournamentsReturnType,
} from "../types";

const handler = async (
  data: GetTournamentsInput,
): Promise<GetTournamentsReturnType> => {
  try {
    const response = await http.get<Response<GetTournamentsData>>(
      `/api/tournamentDetails`,
    );

    if (!response.success || !response.data) {
      return {
        error:
          typeof response.error === "string"
            ? response.error
            : "Failed to fetch tournaments",
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

export const getTournamentDetails = createSafeAction(
  GetTournamentsSchema,
  handler,
);
