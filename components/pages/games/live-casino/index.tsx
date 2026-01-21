import { getLiveCasinoGamesByType } from "@/actions/games/live-casino/paginated";
import { InfiniteGamesList } from "./infinite-games-list";

export const LiveCasinoGames = async () => {
  const { data: gamesResponse } = await getLiveCasinoGamesByType({ page: 1 });
  const initialGames = gamesResponse?.data || [];

  return (
    <>
      <InfiniteGamesList initialGames={initialGames} />
    </>
  );
};
