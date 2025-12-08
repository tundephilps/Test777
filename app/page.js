import CasinoNavigation from "../components/homepage/navigation";
import Hero from "../components/homepage/hero-section";
import NewGames from "../components/homepage/new-games";
import TopGames from "../components/homepage/top-games";
import LiveCasino from "../components/homepage/live-casino";
import PaymentMethod from "../components/homepage/payment-method";
import WelcomeBonus from "../components/homepage/welcome-bonus";
import BonusPromotion from "../components/homepage/bonus-promotion";
import HotGames from "../components/homepage/hot-games";
import WhyChooseUs from "../components/homepage/why-choose";
import Sponsors from "../components/homepage/sponsors";
import { redirect } from "next/navigation";
export default function Home() {
  redirect("/dashboard");
}
