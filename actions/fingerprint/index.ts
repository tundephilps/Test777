"use client";

import { http } from "@/lib/http";
import { FingerprintFormData, FingerprintResponse } from "./types";

export async function getFingerprint(
  formData: FingerprintFormData,
): Promise<FingerprintResponse> {
  try {
    const response = await http.post<FingerprintResponse, FingerprintFormData>(
      "/api/fingerprint",
      formData,
    );

    if (!response.success) {
      return {
        success: false,
        status: response?.status || 400,
        error: response?.error || "Something went wrong",
        row: response?.row,
      };
    }
    return {
      success: true,
      status: response.status || 200,
      message: response.message,
      data: response.data,
    };
  } catch (error: any) {
    return {
      success: false,
      status: error?.status || 400,
      error: error.message || "Something went wrong",
      row: error?.row,
    };
  }
}
