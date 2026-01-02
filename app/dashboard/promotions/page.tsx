import { useTranslations } from "next-intl";
import Image from "next/image";
import Promo11 from "@/public/Promo11.png";

import Promo22 from "@/public/Promo22.png";

import Promo33 from "@/public/Promo33.png";

import Promo44 from "@/public/Promo44.png";

const PromotionsPage = () => {
  const depositBonuses = [
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus11.png",
      title: "1st bonus - 200% up to 1,000.00 and 100 Free Spins",
      description:
        "Start strong with a 200% welcome match + 100 FREE SPINS on your first deposit. Wager x35",
    },
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus22.png",
      title: "2nd bonus - 100% up to 1,500.00 and 100 Free Spins",
      description:
        "Take your next step with a 100% match bonus + 100 FREE SPINS on your second deposit. Wager x35",
    },
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus33.png",
      title: "3rd bonus - 100% up to 1,500.00 and 100 Free Spins",
      description:
        "Boost your play with a 100% match bonus + 100 FREE SPINS on your 3rd deposit. Wager x35",
    },
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus44.png",
      title: "4th bonus - 150% up to 2,000.00 and 200 Free Spins",
      description:
        "Finish strong with a huge 150% bonus + 200 FREE SPINS. Wager x35",
    },
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus55.png",
      title: "4th bonus - 150% up to 2,000.00 and 200 Free Spins",
      description:
        "Finish strong with a huge 150% bonus + 200 FREE SPINS. Wager x35",
    },
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus66.png",
      title: "4th bonus - 150% up to 2,000.00 and 200 Free Spins",
      description:
        "Finish strong with a huge 150% bonus + 200 FREE SPINS. Wager x35",
    },
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus77.png",
      title: "4th bonus - 150% up to 2,000.00 and 200 Free Spins",
      description:
        "Finish strong with a huge 150% bonus + 200 FREE SPINS. Wager x35",
    },
  ];

  const t = useTranslations("PromotionalCards");

  const cards = [
    {
      title: t("welcome_title"),
      subtitle: t("welcome_subtitle"),
      description: t("welcome_description"),
      buttonText: t("welcome_button"),
      image: Promo11,
      bgColor: "bg-[#480001]",
    },
    {
      title: t("cashback_title"),
      subtitle: t("cashback_subtitle"),
      description: t("cashback_description"),
      buttonText: t("cashback_button"),
      image: Promo22,
      bgColor: "bg-[#480001]",
    },
    {
      title: t("freespins_title"),
      subtitle: t("freespins_subtitle"),
      description: t("freespins_description"),
      buttonText: t("freespins_button"),
      image: Promo33,
      bgColor: "bg-[#480001]",
    },
    {
      title: t("audi_title"),
      subtitle: t("audi_subtitle"),
      description: t("audi_description"),
      buttonText: t("audi_button"),
      image: Promo44,
      bgColor: "bg-[#480001]",
    },
  ];

  return (
    <div className="w-full text-white lg:p-6 p-2 space-y-10">
      <span className="text-[16px]  bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 items-center justify-center cursor-pointer rounded-md flex mt-6 mx-auto text-base font-bold text-[#ffffff] px-8 py-3  text-center">
        Promotions
      </span>

      {/* Top Promotions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50 rounded-xl relative overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl h-[400px]`}
            style={{ fontFamily: "var(--font-bounded)" }}
          >
            {/* Background Image - Full Card */}
            <Image
              src={card.image}
              alt={card.title}
              className="w-full h-auto absolute bottom-12  lg:object-contain  object-cover"
            />

            {/* Top Title - No blur background */}
            <div className="absolute top-0 left-0 right-0 p-4 z-10">
              <h3 className="text-white text-center text-lg font-bold leading-tight drop-shadow-lg">
                {card.title} {card.subtitle}
              </h3>
              <p className="text-white text-center text-2xl font-extrabold leading-tight drop-shadow-lg"></p>
            </div>

            {/* Bottom Content - With blur background */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
              {/* Blur Background */}
              <div className="absolute inset-0 bg-[#480001]/10 backdrop-blur-xs"></div>

              {/* Content */}
              <div className="relative p-4 space-y-3">
                {/* Description */}
                <p className="text-white text-[8px] text-center leading-relaxed">
                  {card.description}
                </p>

                {/* Button */}
                <button className=" bg-red-600 hover:bg-red-700 text-white font-light text-[10px] py-2.5 px-2 mx-auto flex items-center justify-center rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg">
                  {card.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Deposit Bonuses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {depositBonuses.map((bonus, i) => (
          <div
            key={i}
            className="relative rounded-2xl shadow-lg overflow-hidden"
          >
            <Image
              src={bonus.image}
              height={1000}
              width={1000}
              className="h-auto w-full  object-cover"
              alt={bonus.title}
              priority={i === 0}
            />

            <div
              className="p-4 space-y-2.5"
              style={{ fontFamily: "var(--font-bounded)" }}
            >
              <p className="text-xl">{bonus.title}</p>

              <p className="text-xs font-bold text-[#58656E]">
                {bonus.description}
              </p>

              <div className="inline-flex gap-2 w-full">
                <button className="w-full text-xs bg-[#0C2738] hover:bg-slate-500 text-white py-2 rounded-lg">
                  Read More
                </button>
                <button className="w-full text-xs bg-red-600 hover:bg-red-500 py-2 rounded-lg">
                  Claim Bonus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionsPage;
