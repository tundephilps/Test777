import Sponsors from "@/components/home/sponsors";
import WhyChooseUs from "@/components/home/why-choose";
import { JackpotGames } from "@/components/pages/games/jackpot";

const JackpotPage = () => {
  return (
    <div>
      <JackpotGames />
      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default JackpotPage;
