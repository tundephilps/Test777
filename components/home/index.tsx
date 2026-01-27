import { getTranslations } from "next-intl/server";
import { FaDice, FaFire, FaGamepad, FaTrophy } from "react-icons/fa";
import { Games } from "../ui/games";
import Hero from "./hero-section";

import { getHotGames } from "@/actions/games/hot-games";
import { getLiveGames } from "@/actions/games/live-casino";
import { getNewGames } from "@/actions/games/new-games";
import { getTopGames } from "@/actions/games/top-games";
// import JackpotGames from "../jackpot/jackpot-games";
import { getAllProviders } from "@/actions/public/providers";
import JackpotHome from "../pages/games/jackpot/jackpot-home";
import { AllProviderHome } from "../pages/public/all-providers/all-provider-home";
import BigWins from "./big-win";
import BonusPromotion from "./bonus-promotion";
import PaymentMethod from "./payment-method";
import Sponsors from "./sponsors";
import WelcomeBonus from "./welcome-bonus";
import WhyChooseUs from "./why-choose";

export const Home = async () => {
  const t = await getTranslations("HomePage");

  const { data: newGamesResponse } = await getNewGames({});
  const { data: topGamesResponse } = await getTopGames({});
  const { data: liveGamesResponse } = await getLiveGames({});
  const { data: hotGamesResponse } = await getHotGames({});
  const { data: providersResponse } = await getAllProviders({});
  // const { data: jackpotGames } = await getJackpotGames({});

  // Extract the actual game data from the Response wrapper
  const newGames = newGamesResponse?.data || [];
  const topGames = topGamesResponse?.data || [];
  const liveGames = liveGamesResponse?.data || [];
  const hotGames = hotGamesResponse?.data || [];
  const providers = providersResponse?.data || [];

  return (
    <div className="space-y-8 pb-10">
      <Hero />

      <BigWins />

      <WelcomeBonus />

      <Games
        games={Array.isArray(newGames) ? newGames : []}
        icon={<FaGamepad />}
        title={"New Games"}
        url="/new-games"
      />

      <PaymentMethod />

      <Games
        games={Array.isArray(topGames) ? topGames : []}
        icon={<FaTrophy />}
        title={"Top Games"}
        url="/top-games"
      />

      <BonusPromotion />

      <Games
        games={Array.isArray(liveGames) ? liveGames : []}
        icon={<FaDice />}
        title={"Live Casino"}
        url="/live-casino"
      />

      <Games
        games={Array.isArray(hotGames) ? hotGames : []}
        icon={<FaFire />}
        title={"Hot Games"}
        url="/hot-games"
      />

      <JackpotHome />

      <AllProviderHome providers={providers} />

      <WhyChooseUs />

      <Sponsors />
    </div>
  );
};
