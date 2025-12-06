import React from "react";
import Hero from "../../components/homepage/hero-section";
import CasinoNavigation from "../../components/casino/navigation";
import WelcomeBonus from "../../components/homepage/welcome-bonus";
import NewGames from "../../components/homepage/new-games";
import TopGames from "../../components/homepage/top-games";
import LiveCasino from "../../components/homepage/live-casino";
import PaymentMethod from "../../components/homepage/payment-method";
import BonusPromotion from "../../components/homepage/bonus-promotion";
import HotGames from "../../components/homepage/hot-games";
import WhyChooseUs from "../../components/homepage/why-choose";
import Sponsors from "../../components/homepage/sponsors";
import BigWins from "../../components/homepage/big-win";

const HomePage = () => {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <BigWins />

      <CasinoNavigation />

      <WelcomeBonus />
      <NewGames />
      <TopGames />
      <LiveCasino />
      <PaymentMethod />
      <BonusPromotion />
      <HotGames />
      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default HomePage;
