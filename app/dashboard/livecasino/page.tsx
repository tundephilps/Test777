import React from "react";
import Hero from "@/components/homepage/hero-section";
import CasinoNavigation from "@/components/livecasino/navigation";
import WhyChooseUs from "@/components/homepage/why-choose";
import Sponsors from "@/components/homepage/sponsors";
import LiveCasinoGames from "@/components/livecasino/live-casino-games";

const LivecasinoPage = () => {
  return (
    <div>
      <Hero />
      <CasinoNavigation />
      <LiveCasinoGames />
      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default LivecasinoPage;
