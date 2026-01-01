"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { IMAGES } from "@/lib/assets";

const BonusPromotion = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const t = useTranslations("HomePage");

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

  const promotions = [
    {
      image: IMAGES.Bonus111,
      title: t("cashback_title"),
      subtitle: t("cashback_subtitle"),
      button: t("cashback_button"),
    },
    {
      image: IMAGES.Bonus222,
      title: t("reload_title"),
      subtitle: t("reload_subtitle"),
      button: t("reload_button"),
    },
    {
      image: IMAGES.Bonus333,
      title: t("monday_title"),
      subtitle: t("monday_subtitle"),
      button: t("monday_button"),
    },
  ];

  return (
    <div className="text-white">
      {/* Header Section */}
      <div className="flex items-center justify-between py-4">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <Image
            src={IMAGES.Speaker}
            width={1000}
            height={300}
            alt="speaker"
            className="w-5 h-5"
          />
          <span className="font-semibold">{t("class6")}</span>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-300 hover:text-white transition-colors border-t hover:bg-white/10 cursor-pointer border-gray-800 bg-[#071a26] p-2 rounded-md">
            {t("view")}
          </button>
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="border-t hover:bg-white/10 cursor-pointer border-gray-800 bg-[#071a26] p-2 rounded transition-all"
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
        {promotions.map((promo, i) => (
          <div
            key={i}
            className="flex-shrink-0 relative group"
            style={{ fontFamily: "var(--font-bounded)" }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={promo.image}
                width={1000}
                height={1000}
                alt={`Promo ${i + 1}`}
                className="w-full h-72 object-cover cursor-pointer transition-all duration-300 group-hover:-translate-y-2"
              />

              {/* Dark overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

              {/* Hover effect shadow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl shadow-blue-500/50 pointer-events-none rounded-lg" />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-8">
                {/* Title */}
                <h3 className="text-white text-4xl font-bold mb-1 drop-shadow-lg leading-tight">
                  {promo.title}
                </h3>

                {/* Subtitle */}
                <p className="text-white text-4xl font-semibold mb-4 drop-shadow-md">
                  {promo.subtitle}
                </p>

                {/* Button */}
                <button className="bg-red-600 mt-6 hover:bg-red-700 text-white font-bold text-xs sm:text-sm py-2 px-5 sm:py-2.5 sm:px-6 rounded transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {promo.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BonusPromotion;
