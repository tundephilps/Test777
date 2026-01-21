"use server";

import { setAuthToken } from "@/lib/auth/cookies";
import { createSafeAction } from "@/lib/create-safe-action";
import { http } from "@/lib/http";
import { Response } from "@/types/api-schema/schema";
import { Login } from "./schema";
import { InputType, LoginResponse, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {
  try {
    const response = await http.post<Response<LoginResponse>, InputType>(
      "/api/login",
      data,
    );

    if (!response.success || !response.data) {
      const errorMessage = response.error;

      if (typeof errorMessage === "object" && errorMessage !== null) {
        const errObj = errorMessage as { message?: string };
        return {
          status: response.status,
          error:
            errObj.message || "Login failed. Please check your credentials.",
        };
      }

      return {
        status: response.status,
        error:
          typeof errorMessage === "string"
            ? errorMessage
            : "Login failed. Please check your credentials.",
      };
    }

    await setAuthToken(response.data.token);

    return {
      status: response.status,
      data: response.data,
    };
  } catch {
    return {
      status: 500,
      error: "Unable to connect to the server. Please try again.",
    };
  }
};

export const login = createSafeAction(Login, handler);
