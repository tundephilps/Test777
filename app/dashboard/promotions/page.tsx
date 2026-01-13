import { useTranslations } from "next-intl";
import Image from "next/image";
import { IMAGES } from "@/lib/assets";

const PromotionsPage = () => {
  const t = useTranslations("PromotionalCards");

  const cards = [
    {
      title: t("welcome_title"),
      subtitle: t("welcome_subtitle"),
      description: t("welcome_description"),
      buttonText: t("welcome_button"),
      image: IMAGES.Promo11,
      bgColor: "bg-[#480001]",
    },
    {
      title: t("cashback_title"),
      subtitle: t("cashback_subtitle"),
      description: t("cashback_description"),
      buttonText: t("cashback_button"),
      image: IMAGES.Promo22,
      bgColor: "bg-[#480001]",
    },
    {
      title: t("freespins_title"),
      subtitle: t("freespins_subtitle"),
      description: t("freespins_description"),
      buttonText: t("freespins_button"),
      image: IMAGES.Promo33,
      bgColor: "bg-[#480001]",
    },
    {
      title: t("audi_title"),
      subtitle: t("audi_subtitle"),
      description: t("audi_description"),
      buttonText: t("audi_button"),
      image: IMAGES.Promo44,
      bgColor: "bg-[#480001]",
    },
  ];

  const dates = [
    {
      day: 21,
      month: "December",
      label: t("expired_offer"),
      type: "expired",
    },
    {
      day: 22,
      month: "Mon",
      label: t("match_bonus_title"),
      subtitle: t("match_bonus_amount"),
      buttonText: t("claim_button"),
      type: "active",
    },
    {
      day: 25,
      month: "December",
      label: t("guaranteed_match"),
      type: "upcoming",
    },
    {
      day: 26,
      month: "Fri",
      label: t("guaranteed_match"),
      type: "upcoming",
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
              height={1000}
              width={1000}
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

      <div className="bg-[#0a1621] py-6 rounded-xl">
        {/* Month Header */}
        <div className="text-center mb-6">
          <h2
            className="text-red-500 text-2xl font-bold uppercase tracking-wider"
            style={{ fontFamily: "var(--font-bounded)" }}
          >
            December
          </h2>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dates.map((date, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden ${
                date.type === "active"
                  ? "bg-gradient-to-br from-red-700 to-red-900"
                  : "bg-slate-800/50"
              } ${
                date.type === "expired" ? "opacity-60" : ""
              } transition-all duration-300 hover:scale-105`}
            >
              {/* Date Badge */}
              <div
                className={`absolute top-0 left-0 w-16 h-20 flex items-center justify-center ${
                  date.type === "active"
                    ? "bg-red-600"
                    : date.type === "expired"
                    ? "bg-slate-700"
                    : "bg-slate-800"
                }`}
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
                }}
              >
                <span
                  className="text-white text-2xl font-bold"
                  style={{ fontFamily: "var(--font-bounded)" }}
                >
                  {date.day}
                </span>
              </div>

              {/* Content */}
              <div className="pt-24 pb-6 px-4">
                {/* Month/Day Label */}
                <div className="text-slate-400 text-xs mb-2 uppercase tracking-wide">
                  {date.month}
                </div>

                {/* Main Label */}
                <h3 className="text-white text-sm font-semibold mb-2">
                  {date.label}
                </h3>

                {/* Subtitle (for active promo) */}
                {date.subtitle && (
                  <p className="text-white text-xs mb-3">{date.subtitle}</p>
                )}

                {/* Action Button (for active promo) */}
                {date.buttonText && (
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2 px-4 rounded transition-colors">
                    {date.buttonText}
                  </button>
                )}
              </div>

              {/* Background Image/Icon (optional) */}
              <div className="absolute bottom-0 right-0 opacity-10">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                  className="text-white"
                >
                  <circle cx="50" cy="50" r="40" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionsPage;
