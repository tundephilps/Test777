import { z } from "zod";

import { ActionState } from "@/lib/create-safe-action";
import { User } from "@/types/api-schema/schema";
import { GetUser } from "./schema";

export type InputType = z.infer<typeof GetUser>;
export type ReturnType = ActionState<InputType, User>;
