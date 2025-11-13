import React from "react";

import { BsGiftFill } from "react-icons/bs";
import Depo1 from "../../public/Depo1.png";

import Depo2 from "../../public/Depo2.png";
import Image from "next/image";
import { BsFillSuitSpadeFill } from "react-icons/bs";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
const WelcomeBonus = () => {
  return (
    <div>
      {/* Bottom Section - Welcome Bonus */}
      <div className="flex items-center justify-between  py-4">
        {/* Left Side - Welcome Bonus */}
        <div className="flex items-center gap-2 text-white">
          <BsGiftFill className="w-5 h-5" />

          <span className="font-semibold">Welcome Bonus</span>
        </div>

        {/* Right Side - View All with Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-300 hover:text-white transition-colors border-t hover:bg-white/10 cursor-pointer border-gray-800 bg-[#071a26] p-2 rounded-md">
            View All
          </button>
          <div className="flex gap-2">
            <button className="border-t hover:bg-white/10 cursor-pointer border-gray-800 bg-[#071a26]  p-2 rounded transition-all">
              <IoChevronBack className="w-4 h-4 text-gray-400" />
            </button>
            <button className="bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-60 cursor-pointer p-2 rounded transition-all">
              <IoChevronForward className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2  w-full gap-4">
        <Image
          src={Depo1}
          alt=""
          className="cursor-pointer transition-all w-full duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
        <Image
          src={Depo2}
          alt=""
          className="cursor-pointer transition-all w-full duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
        />
      </div>
    </div>
  );
};

export default WelcomeBonus;
