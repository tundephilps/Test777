"use server";

import { cookies } from "next/headers";

const AUTH_TOKEN_KEY = "auth_token";
const SESSION_DURATION = 60 * 60 * 24 * 90;

export const setAuthToken = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_TOKEN_KEY, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_DURATION,
    path: "/",
  });
};

export const refreshAuthToken = async () => {
  const cookieStore = await cookies();
  const existingToken = cookieStore.get(AUTH_TOKEN_KEY)?.value;

  if (existingToken) {
    cookieStore.set(AUTH_TOKEN_KEY, existingToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_DURATION,
      path: "/",
    });
  }
};

export const getAuthToken = async (): Promise<string | null> => {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_TOKEN_KEY)?.value || null;
};

export const clearAuthToken = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_TOKEN_KEY);
};
