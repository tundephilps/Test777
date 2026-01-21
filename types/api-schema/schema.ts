export * from "./auth";

export type ErrorType = {
  [key: string]: string | number | ErrorType;
};

export type Response<T = null> = {
  status?: number;
  success: boolean;
  error?: string | string[] | ErrorType;
  data?: T; // Dynamic type for data
};

export interface Game {
  id: number;
  game_name: string;
  slug: string;
  thumbnail: string;
  demo?: number;
  rtp?: number | string;
  no_dep_bonus?: number;
  lock_game?: boolean;
  provider?: string;
  api_provider?: string;
}

export type HotGamesResponse = Game[];
export type NewGamesResponse = Game[];
export type TopGamesResponse = Game[];
export type LiveGamesResponse = Game[];
export type JackpotGamesResponse = Game[];
export interface PaginatedResponse<T> {
  current_page: number;
  data: T;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export type GamesByTypeResponse = PaginatedResponse<Game[]>; // Alias for now
export type FavoriteGamesResponse = PaginatedResponse<Game[]>;

export interface FingerprintFormData {
  fingerprint: string;
  stable_hash: string;
  language: string;
  timezone: string;
  local_storage_id: string;
}

export interface FingerprintResponse {
  success: boolean;
  status: number;
  message?: string;
  error?: string;
  data?: any;
  row?: any;
}
