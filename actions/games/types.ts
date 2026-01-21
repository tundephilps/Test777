import { ActionState } from "@/lib/create-safe-action";
import {
  Game,
  GamesByTypeResponse,
  PaginatedResponse,
  Response,
} from "@/types/api-schema/schema";
import { z } from "zod";
import { GameSchema, PlayGameSchema } from "./schema";

export type InputType = z.infer<typeof GameSchema>;
export type PlayGameInput = z.infer<typeof PlayGameSchema>;
export type GameData = Game[] | PaginatedResponse<Game[]>;

export type ReturnType = ActionState<InputType, Response<GameData>>;
export type JackpotGamesReturnType = ActionState<
  InputType,
  GamesByTypeResponse
>;
export type LiveCasinoGamesReturnType = ActionState<
  InputType,
  GamesByTypeResponse
>;
export type PlayGameReturnType = ActionState<PlayGameInput, Response<any>>;
