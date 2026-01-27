import { ActionState } from "@/lib/create-safe-action";
import { Game, PaginatedResponse, Response } from "@/types/api-schema/schema";
import { z } from "zod";
import { ProviderGamesSchema } from "./schema";

export type InputType = z.infer<typeof ProviderGamesSchema>;
export type ProviderGamesData = PaginatedResponse<Game[]>;
export type ReturnType = ActionState<InputType, Response<ProviderGamesData>>;
