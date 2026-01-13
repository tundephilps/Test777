"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/homepage/hero-section";
import CasinoNavigation from "@/components/casino/navigation";
import WelcomeBonus from "@/components/homepage/welcome-bonus";
import NewGames from "@/components/homepage/new-games";
import TopGames from "@/components/homepage/top-games";
import LiveCasino from "@/components/homepage/live-casino";
import PaymentMethod from "@/components/homepage/payment-method";
import BonusPromotion from "@/components/homepage/bonus-promotion";
import HotGames from "@/components/homepage/hot-games";
import WhyChooseUs from "@/components/homepage/why-choose";
import Sponsors from "@/components/homepage/sponsors";
import BigWins from "@/components/homepage/big-win";
import AdsModal from "@/components/modals/adsmodal";
import Jackpot from "@/components/homepage/Jackpot";

const HomePage = () => {
  const [showAds, setShowAds] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAds(true);
    }, 5000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <div className="overflow-x-clip">
      <Hero />
      <BigWins />
      <CasinoNavigation />
      <WelcomeBonus />
      <Jackpot />
      <NewGames />
      <TopGames />
      <LiveCasino />
      <PaymentMethod />
      <BonusPromotion />
      <HotGames />
      <WhyChooseUs />
      <Sponsors />

      {showAds && <AdsModal onClose={() => setShowAds(false)} />}
    </div>
  );
};

export default HomePage;
