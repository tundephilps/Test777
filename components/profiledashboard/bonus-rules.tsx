"use client";
import Image from "next/image";
import { FaCircle, FaGamepad } from "react-icons/fa";
import { GiCardAceSpades, GiRollingDices } from "react-icons/gi";
import { PiSpinnerFill } from "react-icons/pi";
import { IMAGES } from "@/lib/assets";
import { useTranslations } from "next-intl";

const BonusRules = () => {
  const t = useTranslations("BonusRules");

  const gameContributions = [
    {
      name: t("slots"),
      icon: <GiRollingDices />,
      contribution: 100,
      color: "text-red-500",
    },
    {
      name: t("crash"),
      icon: <FaCircle />,
      contribution: 100,
      color: "text-red-500",
    },
    {
      name: t("dice"),
      icon: <GiCardAceSpades />,
      contribution: 100,
      color: "text-red-500",
    },
    {
      name: t("blackjack"),
      icon: <GiCardAceSpades />,
      contribution: 50,
      color: "text-yellow-500",
    },
    {
      name: t("roulette"),
      icon: <PiSpinnerFill />,
      contribution: 25,
      color: "text-slate-500",
    },
  ];

  const termsConditions = [
    t("term1"),
    t("term2"),
    t("term3"),
    t("term4"),
    t("term5"),
  ];

  return (
    <div className="min-h-screen bg-[#0a1f2d] lg:p-6 p-2 mt-6 rounded-md">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 ">
            <Image
              width={1000}
              height={1000}
              alt=""
              src={IMAGES.Bonus1}
              className="text-white text-xl"
            />
          </div>
          <h1 className="text-white text-2xl ">{t("header")}</h1>
        </div>

        {/* General Requirements Section */}
        <div className="mb-8">
          <div className="bg-[#0B2231] backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-center gap-2 mb-4">
              <FaCircle className="text-red-700 text-xs" />
              <h2 className="text-white text-lg font-semibold">
                {t("generalRequirements")}
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-400 text-sm mb-1">
                  {t("totalMultiplier")}
                </div>
                <div className="text-white text-3xl font-bold">{t("x30")}</div>
              </div>
              <div className="text-right">
                <div className="text-slate-400 text-sm mb-1">
                  {t("currentProgress")}
                </div>
                <div className="text-2xl font-bold">
                  <span className="text-red-500">12</span>
                  <span className="text-slate-500"> / </span>
                  <span className="text-slate-400">30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Contributions Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FaGamepad className="text-red-700" size={28} />
            <h2 className="text-white text-lg font-semibold">
              {t("gameContributions")}
            </h2>
          </div>

          <div className="divide-slate-700/50">
            {gameContributions.map((game, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-5 bg-[#0B2231] mt-3 rounded-md hover:bg-slate-700/30 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-slate-400 text-xl">{game.icon}</div>
                  <span className="text-slate-300 font-medium">
                    {game.name}
                  </span>
                </div>
                <div className={`${game.color} font-semibold text-lg`}>
                  {game.contribution}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Conditions Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaCircle className="text-red-500 text-xs" />
            <h2 className="text-white text-lg font-semibold">
              {t("termsConditions")}
            </h2>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <ol className="space-y-3">
              {termsConditions.map((term, index) => (
                <li key={index} className="flex gap-3 text-slate-400 text-sm">
                  <span className="text-slate-500 font-semibold min-w-[20px]">
                    {index + 1}.
                  </span>
                  <span>{term}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusRules;
