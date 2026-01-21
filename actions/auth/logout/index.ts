"use server";

import { clearAuthToken } from "@/lib/auth/cookies";
import { LogoutResponse } from "./types";

export const logout = async (): Promise<LogoutResponse> => {
  await clearAuthToken();
  return { success: true };
};
