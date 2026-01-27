import { Game as ApiGame } from "@/types/api-schema/schema";

export type Game = ApiGame;

export interface GameCardProps {
  game: Game;
  onFavoriteToggle?: () => void;
  onPlayClick?: (game: Game) => void;
  onDemoClick?: (game: Game) => void;
  isFavorite?: boolean;
}

export interface GamesProps {
  icon: React.ReactNode;
  title: string;
  games: Game[];
  url?: string;
}
