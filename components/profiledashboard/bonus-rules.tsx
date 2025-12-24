import Image from "next/image";
import React from "react";
import {
  FaGift,
  FaCircle,
  FaDiceFive,
  FaSkullCrossbones,
  FaDiceD6,
  FaGamepad,
} from "react-icons/fa";
import { GiCardAceSpades, GiRollingDices } from "react-icons/gi";
import { PiSpinnerFill } from "react-icons/pi";
import Bonus from "../../public/Bonus1.png";

export default function BonusRules() {
  const gameContributions = [
    {
      name: "Slots",
      icon: <GiRollingDices />,
      contribution: 100,
      color: "text-red-500",
    },
    {
      name: "Crash",
      icon: <FaSkullCrossbones />,
      contribution: 100,
      color: "text-red-500",
    },
    {
      name: "Dice",
      icon: <FaDiceD6 />,
      contribution: 100,
      color: "text-red-500",
    },
    {
      name: "Blackjack",
      icon: <GiCardAceSpades />,
      contribution: 50,
      color: "text-yellow-500",
    },
    {
      name: "Roulette",
      icon: <PiSpinnerFill />,
      contribution: 25,
      color: "text-slate-500",
    },
  ];

  const termsConditions = [
    "Minimum deposit of $20 required to activate bonus",
    "Wagering must be completed within 30 days",
    "Maximum bet while wagering: $5 per spin",
    "Bonus winnings capped at $5,000",
    "One active bonus at a time",
  ];

  return (
    <div className="min-h-screen bg-[#0a1f2d] lg:p-6 p-2 mt-6 rounded-md">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 ">
            <Image
              alt=""
              src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus1.png"
              className="text-white text-xl"
            />
          </div>
          <h1 className="text-white text-2xl ">Bonus Rules</h1>
        </div>

        {/* General Requirements Section */}
        <div className="mb-8">
          <div className="bg-[#0B2231] backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-center gap-2 mb-4">
              <FaCircle className="text-red-700 text-xs" />
              <h2 className="text-white text-lg font-semibold">
                General Requirements
              </h2>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-400 text-sm mb-1">
                  Total Multiplier
                </div>
                <div className="text-white text-3xl font-bold">x30</div>
              </div>
              <div className="text-right">
                <div className="text-slate-400 text-sm mb-1">
                  Current Progress
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
              Game Contributions
            </h2>
          </div>

          <div className="  divide-slate-700/50">
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
              Terms & Conditions
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
}
