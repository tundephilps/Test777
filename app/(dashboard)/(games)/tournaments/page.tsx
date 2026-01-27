import Sponsors from "@/components/home/sponsors";
import WhyChooseUs from "@/components/home/why-choose";
import { Tournament } from "@/components/pages/games/tournament";

const TournamentPage = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      {/* <ParticipatingGames />

      <Evoplay />
      <ParticipatingGames />

      <DropWin />
      <ParticipatingGames /> */}

      <Tournament />

      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default TournamentPage;
