import { z } from "zod";

import { Login } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { User } from "@/types/api-schema/schema";

export type InputType = z.infer<typeof Login>;

export type LoginResponse = {
  user: User;
  token: string;
};

export type ReturnType = ActionState<InputType, LoginResponse>;
