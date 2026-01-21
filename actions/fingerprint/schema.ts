import { z } from "zod";

export const FingerprintSchema = z.object({
  fingerprint: z.string(),
  stable_hash: z.string(),
  language: z.string(),
  timezone: z.string(),
  local_storage_id: z.string(),
});
