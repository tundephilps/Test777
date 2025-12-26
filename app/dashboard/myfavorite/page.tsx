import Image from "next/image";
import React from "react";
import WhyChooseUs from "../../../components/homepage/why-choose";
import Sponsors from "../../../components/homepage/sponsors";
import FavGames from "../../../components/myfavorites/favgames";
import FavHero2 from "../../../public/FavHero2.png";
import { useTranslations } from "next-intl";

const MyFavorite = () => {
  const t = useTranslations("FavoritePage");
  return (
    <div>
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{ fontFamily: "var(--font-bounded)" }}
      >
        <Image
          src={FavHero2}
          height={1000}
          width={1000}
          className="w-full"
          alt={t("hero_title")}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-8 md:px-12">
          {/* Title */}
          <h2 className="text-white text-2xl lg:text-[6vh] font-bold mb-3 leading-tight max-w-md drop-shadow-lg">
            {t("hero_title")}
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-6 max-w-md leading-relaxed drop-shadow-md">
            {t("hero_subtitle")}
          </p>

          {/* Play Now Button */}
          <button className="cursor-pointer flex justify-start items-start bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-[32px] py-[6px] rounded-md text-white font-medium transition w-fit">
            <span> {t("hero_button")}</span>
          </button>
        </div>
      </div>
      <FavGames />
      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default MyFavorite;
