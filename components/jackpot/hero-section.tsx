"use server";
import Image from "next/image";
import React from "react";

import HeroPhoto from "../../public/Mask2.png";

import Mask4 from "../../public/Mask4.png";

import Number from "../../public/Number.png";

import Jackpot from "../../public/Jackpot.png";

import Jackpot2 from "../../public/Jackpot2.png";
import Visa from "../../public/Visa.png";
import CountdownTimer from "./Timer";
import Countdown from "./Countdown";

const Hero = () => {
  return (
    <>
      <div className="relative   lg:flex hidden items-center">
        <Image src={HeroPhoto} alt="" className=" w-full" />

        <div className="absolute text-white items-center   left-7">
          <div className="">
            <div className="mb-1">
              <h2
                className="text-[5vh] font-semibold tracking-wider  opacity-90 "
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                Try your luck <br /> Wining Chance
              </h2>
            </div>

            <div className="mb-6">
              <p
                className="text-sm opacity-80"
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                Every 12 Hours winning chance
              </p>
            </div>

            {/* <CountdownTimer /> */}
            <Countdown targetTime="2025-12-30T23:59:59" />

            <button className="flex cursor-pointer mt-4 items-center space-x-1 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-24 py-2.5 rounded-md text-white font-medium transition">
              <span>Bet Now</span>
            </button>
          </div>
        </div>
        <div className="absolute right-4">
          <Image src={Jackpot} alt="" className="w-full" />
          <Image
            src={Number}
            alt=""
            className="absolute bottom-[15%] right-[28%]"
          />
        </div>
      </div>
      <div className="relative   flex lg:hidden items-center w-full">
        <Image src={Mask4} alt="" width={1000} className="" />
        <div className="p-6 gap-2  space-y-2 absolute items-center w-full justify-center flex flex-col text-white">
          {/* Text */}
          <div className="mb-1">
            <h2
              className="text-[5vh] font-semibold tracking-wider text-center  opacity-90 "
              style={{ fontFamily: "var(--font-bounded)" }}
            >
              Try your luck <br /> Wining Chance
            </h2>
          </div>

          <div className="mb-6">
            <p
              className="text-sm opacity-80"
              style={{ fontFamily: "var(--font-bounded)" }}
            >
              Every 12 Hours winning chance
            </p>
          </div>
          <Countdown targetTime="2025-12-30T23:59:59" />
          <button className="flex cursor-pointer mt-4 items-center space-x-1 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-24 py-2.5 rounded-md text-white font-medium transition">
            <span>Bet Now</span>
          </button>
          <Image
            src={Jackpot2}
            width={3000}
            height={300}
            className="mx-auto  h-40 w-4/4"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
