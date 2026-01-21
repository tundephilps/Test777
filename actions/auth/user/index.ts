"use server";

import { createSafeAction } from "@/lib/create-safe-action";
import { http } from "@/lib/http";
import { Response, User } from "@/types/api-schema/schema";
import { GetUser } from "./schema";
import { ReturnType } from "./types";

const handler = async (): Promise<ReturnType> => {
  try {
    const response = await http.get<Response<User>>("/api/user");

    if (!response.success || !response.data) {
      return {
        error: "Failed to fetch user!",
      };
    }

    return {
      data: response.data,
    };
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
};

export const getUser = createSafeAction(GetUser, handler);
