import { getJackpotGames } from "@/actions/games/jackpot";
import { Games } from "@/components/games";
import { FaGem } from "react-icons/fa";

export const JackpotHome = async () => {
  const { data: gamesResponse } = await getJackpotGames({ page: 1 });
  const games = gamesResponse?.data?.slice(0, 12) || [];

  return (
    <>
      <Games
        games={games}
        icon={<FaGem />}
        title={"Jackpot Games"}
        url="/jackpot"
      />
    </>
  );
};
