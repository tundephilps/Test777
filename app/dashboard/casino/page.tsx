import React from "react";
import Hero from "../../../components/homepage/hero-section";
import CasinoNavigation from "../../../components/casino/navigation";
import CasinoGames from "../../../components/casino/casino-games";
import WhyChooseUs from "../../../components/homepage/why-choose";
import Sponsors from "../../../components/homepage/sponsors";

const CasinoPage = () => {
  return (
    <div>
      <Hero />
      <CasinoNavigation />
      <CasinoGames />
      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default CasinoPage;
