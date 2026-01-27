import { getJackpotGames } from "@/actions/games/jackpot";
import { Games } from "@/components/ui/games";
import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import { FaGem } from "react-icons/fa";
import AnimatedAmount from "./animated-amount";

const JackpotHome = async () => {
  const { data: gamesResponse } = await getJackpotGames({ page: 1 });
  const games = gamesResponse?.data?.slice(0, 12) || [];

  return (
    <>
      <div
        className="my-8 min-h-[400px] relative bg-cover w-full bg-top bg-no-repeat px-4 py-12"
        style={{ backgroundImage: `url(${IMAGES.JackpotMask})` }}
      >
        {/* Center Jackpot2 */}
        <div className="relative">
          <Image
            src={IMAGES.Jackpot}
            width={1000}
            height={1000}
            alt=""
            className="w-auto h-auto mx-auto "
          />
          <AnimatedAmount />
        </div>
        <Games
          games={games}
          icon={<FaGem />}
          title={"Jackpot Games"}
          url="/jackpot"
        />
      </div>
    </>
  );
};

export default JackpotHome;
