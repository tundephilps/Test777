import { getAuthToken } from "@/lib/auth/cookies";
import axios from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions<TBody = unknown> {
  body?: TBody;
  headers?: Record<string, string>;
  queryParams?: Record<string, string | number | boolean>;
}

const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_URL || "";
};

export const isApiConfigured = () => {
  return Boolean(process.env.NEXT_PUBLIC_API_URL);
};

async function httpRequest<TResponse, TBody = unknown>(
  method: HttpMethod,
  endpoint: string,
  options: RequestOptions<TBody> = {},
): Promise<TResponse> {
  const { body, headers, queryParams } = options;

  const queryString = queryParams
    ? "?" +
      new URLSearchParams(queryParams as Record<string, string>).toString()
    : "";

  try {
    const BASE_URL = getBaseUrl();

    if (!BASE_URL) {
      throw new Error("API URL is not configured");
    }

    const url = `${BASE_URL}${endpoint}${queryString}`;

    const token = await getAuthToken();

    const headersCondition = {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...headers,
    };

    const options = {
      method: method,
      headers: headersCondition,
      ...(method !== "GET" && { data: body }),
    };

    const response = await axios(url, options);

    if (response.status !== 200) {
      return {
        status: response.status,
        success: false,
        error: response?.data?.message || response.statusText,
      } as TResponse;
    }

    let data = response.data.data;
    if (!data && response.data.games) {
      data = response.data.games;
    }

    if (response.data.user && response.data.token) {
      data = {
        user: response.data.user,
        token: response.data.token,
      };
    }

    return {
      status: response.status,
      success: response.data.success,
      data: data,
    } as TResponse;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        status: error.response?.status ?? 500,
        success: false,
        error: error.response?.data ?? error.message,
      } as TResponse;
    }

    return {
      status: 500,
      success: false,
      error: "An unexpected error occurred",
    } as TResponse;
  }
}

export const http = {
  get: <T>(url: string, options?: RequestOptions) =>
    httpRequest<T>("GET", url, options),
  post: <TResponse, TBody>(
    url: string,
    body: TBody,
    options?: RequestOptions<TBody>,
  ) => httpRequest<TResponse, TBody>("POST", url, { ...options, body }),
  put: <TResponse, TBody>(
    url: string,
    body: TBody,
    options?: RequestOptions<TBody>,
  ) => httpRequest<TResponse, TBody>("PUT", url, { ...options, body }),
  patch: <TResponse, TBody>(
    url: string,
    body: TBody,
    options?: RequestOptions<TBody>,
  ) => httpRequest<TResponse, TBody>("PATCH", url, { ...options, body }),
  delete: <T>(url: string, options?: RequestOptions) =>
    httpRequest<T>("DELETE", url, options),
};
