"use server";
import Image from "next/image";
import React from "react";
import HeroPhoto from "../../public/Hero.png";
import HeroMobile from "../../public/HeroMobile.png";
import Visa from "../../public/Visa.png";

const Hero = () => {
  return (
    <div>
      <div className="relative   lg:flex hidden items-center">
        <Image src={HeroPhoto} alt="" className=" w-full" />

        <div className="absolute text-white items-center   left-7">
          <div className="flex flex-col flex-start justify-between h-full">
            <div className="">
              <p
                className="text-[4vh] font-semibold tracking-wider uppercase opacity-90 "
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                WELCOME PACK
              </p>
            </div>

            <div className="mb-1">
              <h1
                className="text-[8vh] font-bold leading-tight font-bebas "
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                620% up to $8,000
              </h1>
            </div>

            <div className="mb-6">
              <p className="text-sm opacity-80 font-bounded font-bebas">
                +400 FS on first 4 deposits
              </p>
            </div>

            <button className="cursor-pointer flex justify-start items-start bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-[32px] py-[6px] rounded-md text-white font-medium transition w-fit">
              <span>Join Now</span>
            </button>

            <Image src={Visa} alt="" className=" mt-8" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-full lg:hidden">
        <div className="relative w-full overflow-hidden">
          <Image
            src={HeroMobile}
            alt=""
            className="w-full h-auto"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
