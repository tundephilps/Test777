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

export interface TournamentGame {
  id: number;
  slug: string;
  game_name: string;
  thumbnail: string;
  no_dep_bonus: number;
  is_bonus_exclude: number;
  pivot?: {
    tournament_id: number;
    game_id: number;
  };
}

export interface Tournament {
  id: number;
  title: string;
  image: string;
  prize_pool: string;
  status: string;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
  games: TournamentGame[];
}

export type GetTournamentsInput = z.infer<
  typeof import("./schema").GetTournamentsSchema
>;
export type GetTournamentsData = Tournament[];
export type GetTournamentsReturnType = ActionState<
  GetTournamentsInput,
  Response<GetTournamentsData>
>;
