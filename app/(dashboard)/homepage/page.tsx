import Image from "next/image";
import React from "react";
import Hero from "../../../public/Hero.png";
import Visa from "../../../public/Visa.png";
import CasinoNavigation from "../../../components/homepage/navigation";
import Depo1 from "../../../public/Depo1.png";

import Depo2 from "../../../public/Depo2.png";
import { BsGiftFill } from "react-icons/bs";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import NewGames from "../../../components/homepage/new-games";
import TopGames from "../../../components/homepage/top-games";
import LiveCasino from "../../../components/homepage/live-casino";
import PaymentMethod from "../../../components/homepage/payment-method";
import WelcomeBonus from "../../../components/homepage/welcome-bonus";
import BonusPromotion from "../../../components/homepage/bonus-promotion";

import HotGames from "../../../components/homepage/hot-games";

import WhyChoose from "../../../components/homepage/why-choose";
import Sponsors from "../../../components/homepage/sponsors";

const page = () => {
  return (
    <div className="w-full">
      <div className="relative   lg:flex hidden items-center">
        <Image src={Hero} alt="" className="w-full" />

        <div className="absolute text-white items-center   left-7">
          <div className="">
            <div className="mb-2">
              <p className="text-xs font-semibold tracking-wider uppercase opacity-90">
                WELCOME PACK
              </p>
            </div>

            <div className="mb-1">
              <h2 className="text-4xl font-bold leading-tight">
                620% up to $8,000
              </h2>
            </div>

            <div className="mb-6">
              <p className="text-sm opacity-80">+400 FS on first 4 deposits</p>
            </div>

            <button className="flex cursor-pointer items-center space-x-1 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-3 py-1.5 rounded-md text-white font-medium transition">
              <span>Join Now</span>
            </button>
          </div>
          <Image src={Visa} alt="" className=" mt-8" />
        </div>
      </div>

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
};

export default page;
