import { getFavoriteGames } from "@/actions/games/my-favorite";
import { InfiniteGamesList } from "./infinite-games-list";

export const MyFavorite = async () => {
  const { data: gamesResponse } = await getFavoriteGames({ page: 1 });
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
