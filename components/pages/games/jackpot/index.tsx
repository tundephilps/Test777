import { getJackpotGames } from "@/actions/games/jackpot";
import Hero from "./hero-section";
import { InfiniteGamesList } from "./infinite-games-list";

export const JackpotGames = async () => {
  const { data: gamesResponse } = await getJackpotGames({ page: 1 });
  const initialGames = gamesResponse?.data || [];

  return (
    <>
      <Hero />
      <InfiniteGamesList initialGames={initialGames} />
    </>
  );
};
