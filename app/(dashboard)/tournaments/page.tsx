import React from "react";
import HeroSection from "@/components/tournanment/turbo-win";
import ParticipatingGames from "@/components/tournanment/participating-games";
import Evoplay from "@/components/tournanment/evoplay";
import DropWin from "@/components/tournanment/drop-win";
import WhyChooseUs from "@/components/homepage/why-choose";
import Sponsors from "@/components/homepage/sponsors";

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
