import { ActionState } from "@/lib/create-safe-action";
import {
  Provider,
  ProvidersResponse,
  Response,
} from "@/types/api-schema/schema";
import { z } from "zod";
import { ProvidersSchema } from "./schema";

export type InputType = z.infer<typeof ProvidersSchema>;
export type ReturnType = ActionState<InputType, Response<ProvidersResponse>>;

// Re-export Provider type for convenience
export type { Provider };
