import Hero from "@/components/home/hero-section";
import Sponsors from "@/components/home/sponsors";
import WhyChooseUs from "@/components/home/why-choose";
import { CasinoGames } from "@/components/pages/games/casino";

const CasinoPage = () => {
  return (
    <div>
      <Hero />
      <CasinoGames />
      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default CasinoPage;
