import { getGamesByType } from "@/actions/games/casino";
import { InfiniteGamesList } from "./infinite-games-list";

export const CasinoGames = async () => {
  const { data: gamesResponse } = await getGamesByType({ page: 1 });
  const gameData = gamesResponse?.data;
  const initialGames = Array.isArray(gameData)
    ? gameData
    : gameData?.data || [];

  return (
    <>
      <InfiniteGamesList initialGames={initialGames} />
    </>
  );
};
