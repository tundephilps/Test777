import Sponsors from "@/components/home/sponsors";
import WhyChooseUs from "@/components/home/why-choose";
import DropWin from "@/components/tournanment/drop-win";
import Evoplay from "@/components/tournanment/evoplay";
import ParticipatingGames from "@/components/tournanment/participating-games";
import HeroSection from "@/components/tournanment/turbo-win";

const TournamentPage = () => {
  return (
    <div>
      <HeroSection />
      <ParticipatingGames />

      <Evoplay />
      <ParticipatingGames />

      <DropWin />
      <ParticipatingGames />

      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default TournamentPage;
