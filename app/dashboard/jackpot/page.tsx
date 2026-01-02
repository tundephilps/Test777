import JackpotGames from "@/components/jackpot/jackpot-games";
import Hero from "@/components/jackpot/hero-section";
import WhyChooseUs from "@/components/homepage/why-choose";
import Sponsors from "@/components/homepage/sponsors";

const JackpotPage = () => {
  return (
    <div>
      <Hero />
      <JackpotGames />
      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default JackpotPage;
