import { config } from "@/config";
import { User } from "@/types/api-schema/schema";

interface ValidateTokenResponse {
  success: boolean;
  data?: User;
  error?: string;
}

export const validateToken = async (
  token: string
): Promise<ValidateTokenResponse> => {
  try {
    const apiUrl = config("app.apiUrl");

    if (!apiUrl) {
      return { success: false, error: "API not configured" };
    }

    const response = await fetch(`${apiUrl}/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return { success: false, error: "Invalid token" };
    }

    const text = await response.text();

    if (!text || text.trim() === "") {
      return { success: false, error: "Empty response" };
    }

    let result;
    try {
      result = JSON.parse(text);
    } catch {
      return { success: false, error: "Invalid JSON response" };
    }

    if (!result.data) {
      return { success: false, error: "Invalid response" };
    }

    return { success: true, data: result.data as User };
  } catch {
    return { success: false, error: "Token validation failed" };
  }
};
