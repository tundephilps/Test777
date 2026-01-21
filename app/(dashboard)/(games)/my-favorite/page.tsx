import Sponsors from "@/components/home/sponsors";
import WhyChooseUs from "@/components/home/why-choose";
import Image from "next/image";

import { MyFavorite } from "@/components/pages/games/my-favorite";
import { IMAGES } from "@/lib/assets";
import { useTranslations } from "next-intl";

const MyFavoritePage = () => {
  const t = useTranslations("FavoritePage");
  return (
    <div>
      <div
        className="relative w-full overflow-hidden lg:flex hidden rounded-lg"
        style={{ fontFamily: "var(--font-bounded)" }}
      >
        <Image
          src={IMAGES.FavHero2}
          height={1000}
          width={1000}
          className="w-full h-[50vh]"
          alt={t("hero_title")}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-8 md:px-12">
          {/* Title */}
          <h2 className="text-white text-2xl lg:text-[6vh] font-bold mb-3 leading-tight max-w-3xl drop-shadow-lg">
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
      <div className="relative   flex lg:hidden items-center">
        <Image
          src={IMAGES.FavHero3}
          width={1000}
          height={500}
          alt="Hero"
          className="w-full h-auto"
        />

        <div className="absolute top-12 text-white  items-center inset-0 w-full">
          <div className="flex flex-col text-center h-full">
            <div className="">
              <p
                className="text-[4vh] font-semibold tracking-wider  opacity-90 "
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                {t("hero_title")}
              </p>
              <p
                className="text-[3vh] font-normal   opacity-90 max-w-xl"
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                {t("hero_subtitle")}
              </p>
              <div className="mb-2 mx-auto flex items-center justify-center mt-6">
                <button className="cursor-pointer flex justify-start items-start bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-[32px] py-[6px] rounded-md text-white font-medium transition w-fit">
                  <span> {t("hero_button")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyFavorite />
      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default MyFavoritePage;
