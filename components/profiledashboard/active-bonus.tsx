import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import { FaGift, FaCheckCircle } from "react-icons/fa";

export default function ActiveBonuses() {
  const bonuses = [
    {
      id: 1,
      name: "Welcome Bonus",
      status: "Expires in 4 days",
      bonusValue: 150,
      wagered: 12,
      wageringProgress: 40,
      potentialWin: 150,
      required: 30,
      statusBadge: "Deposit before",
    },
    {
      id: 2,
      name: "Weekend Booster",
      status: "Expires in 4 days",
      bonusValue: 150,
      wagered: 75,
      wageringProgress: 75,
      potentialWin: 150,
      required: 30,
      statusBadge: "Receive bonus",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#0a1f2d] mt-8 rounded-md lg:p-6 p-2"
      style={{ fontFamily: "var(--font-bounded)" }}
    >
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <FaGift className="text-white text-xl" />
            </div>
            <h1 className="text-white text-2xl font-bold">Active Bonuses</h1>
          </div>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
            Bonuses
          </button>
        </div>

        {/* Bonuses List */}
        <div className="space-y-6">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-[#0B2231] backdrop-blur-sm rounded-xl lg:p-6 p-2 border border-slate-700/50"
            >
              {/* Header Section */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-semibold text-xl">
                      {bonus.name}
                    </h3>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full lg:text-xs text-[10px] font-medium border border-emerald-500/30">
                      {bonus.statusBadge}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <FaCheckCircle className="text-xs" />
                    <span>{bonus.status}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">
                    ${bonus.bonusValue}
                  </div>
                  <div className="text-slate-400 text-sm mt-1">Bonus value</div>
                </div>
              </div>

              {/* Wagering Progress Section */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <BiTrendingUp className="text-emerald-500" />
                    <span className="font-medium">Wagering Progress</span>
                  </div>
                  <span className="text-red-500 font-semibold text-sm">
                    {bonus.wageringProgress}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-3 bg-slate-700 rounded-full overflow-hidden mb-2">
                  <div
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all shadow-lg shadow-red-500/50"
                    style={{ width: `${bonus.wageringProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">
                    ${bonus.wagered}x wagered
                  </span>
                  <span className="text-slate-400">
                    ${bonus.required}x required
                  </span>
                </div>
              </div>

              {/* Footer Section */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                <div className="flex items-center gap-2">
                  <BiTrendingUp className="text-emerald-500 text-sm" />
                  <span className="text-slate-300 text-sm">
                    Potential Win:{" "}
                    <span className="text-emerald-400 font-semibold">
                      ${bonus.potentialWin}
                    </span>
                  </span>
                </div>
                <button className="px-6 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
