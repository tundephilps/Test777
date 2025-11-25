import CasinoNavigation from "../components/homepage/navigation";
import Hero from "../components/homepage/hero-section";
import NewGames from "../components/homepage/new-games";
import TopGames from "../components/homepage/top-games";
import LiveCasino from "../components/homepage/live-casino";
import PaymentMethod from "../components/homepage/payment-method";
import WelcomeBonus from "../components/homepage/welcome-bonus";
import BonusPromotion from "../components/homepage/bonus-promotion";
import HotGames from "../components/homepage/hot-games";
import WhyChoose from "../components/homepage/why-choose";
import Sponsors from "../components/homepage/sponsors";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CasinoNavigation />
      <WelcomeBonus />
      <NewGames />
      <TopGames />
      <LiveCasino />
      <PaymentMethod />
      <BonusPromotion />
      <HotGames />
      <WhyChoose />
      <Sponsors />
    </div>
  );
}
