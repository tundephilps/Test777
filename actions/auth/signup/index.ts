"use server";

import { z } from "zod";
import { SignupSchema } from "./schema";
import { SignupResponse } from "./types";

export const signup = async (
  data: z.infer<typeof SignupSchema>,
): Promise<SignupResponse> => {
  // Placeholder implementation
  return { success: true, message: "Signup successful" };
};
