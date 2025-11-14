"use server";
import Image from "next/image";
import React from "react";

import HeroPhoto from "../../public/Mask2.png";

import Jackpot from "../../public/Jackpot.png";
import Visa from "../../public/Visa.png";
import CountdownTimer from "./Timer";

const Hero = () => {
  return (
    <div className="relative   lg:flex hidden items-center">
      <Image src={HeroPhoto} alt="" className=" w-full" />

      <div className="absolute text-white items-center   left-7">
        <div className="">
          <div className="mb-1">
            <h2 className="text-4xl font-bold leading-tight pb-4 ">
              Try your luck <br /> Wining Chance
            </h2>
          </div>

          <div className="mb-6">
            <p className="text-sm opacity-80">Every 12 Hours winning chance</p>
          </div>

          <CountdownTimer />

          <button className="flex cursor-pointer mt-4 items-center space-x-1 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-24 py-1.5 rounded-md text-white font-medium transition">
            <span>Bet Now</span>
          </button>
        </div>
      </div>

      <Image src={Jackpot} alt="" className="absolute right-4" />
    </div>
  );
};

export default Hero;
