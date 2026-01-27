import { z } from "zod";

import { ActionState } from "@/lib/create-safe-action";
import { FavoriteGameSchema } from "./schema";

export type InputType = z.infer<typeof FavoriteGameSchema>;

export type FavoriteResponse = {
  message: string;
};

export type ReturnType = ActionState<InputType, FavoriteResponse>;
