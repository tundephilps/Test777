import Hero from "@/components/home/hero-section";
import Sponsors from "@/components/home/sponsors";
import WhyChooseUs from "@/components/home/why-choose";
import { LiveCasinoGames } from "@/components/pages/games/live-casino";

const LivecasinoPage = () => {
  return (
    <div>
      <Hero />
      {/* <CasinoNavigation /> */}
      <LiveCasinoGames />
      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default LivecasinoPage;
