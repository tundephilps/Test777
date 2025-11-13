"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { BsGiftFill } from "react-icons/bs";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import Bonus1 from "../../public/Bonus.png";
import Bonus2 from "../../public/Bonus2.png";
import Speaker from "../../public/Speaker.png";

const BonusPromotion = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Slide left
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  // Slide right
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const images = [Bonus1, Bonus2, Bonus1]; // You can add more

  return (
    <div className="text-white">
      {/* Header Section */}
      <div className="flex items-center justify-between py-4">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <Image src={Speaker} alt="speaker" className="w-5 h-5" />
          <span className="font-semibold">Bonus & Promotion</span>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-300 hover:text-white transition-colors border-t hover:bg-white/10 cursor-pointer border-gray-800 bg-[#071a26] p-2 rounded-md">
            View All
          </button>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="border-t hover:bg-white/10 cursor-pointer border-gray-800 bg-[#071a26]  p-2 rounded transition-all"
            >
              <IoChevronBack className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-60 cursor-pointer p-2 rounded transition-all"
            >
              <IoChevronForward className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {images.map((img, i) => (
          <div key={i} className="flex-shrink-0 ">
            <Image
              src={img}
              alt={`Promo ${i + 1}`}
              className="rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BonusPromotion;
