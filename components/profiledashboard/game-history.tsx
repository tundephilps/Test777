"use client";
import React from "react";
import {
  FaGamepad,
  FaDice,
  FaChevronLeft,
  FaChevronRight,
  FaRocket,
} from "react-icons/fa";
import { GiRollingDices, GiCardAceSpades } from "react-icons/gi";
import { useTranslations } from "next-intl";

const GameHistory = () => {
  const t = useTranslations("GameHistory");

  const gameHistory = [
    {
      date: "Dec 1, 2025",
      method: t("slot"),
      icon: <GiCardAceSpades />,
      status: "win",
      amount: "+$32.55",
    },
    {
      date: "Dec 1, 2025",
      method: t("slot"),
      icon: <GiCardAceSpades />,
      status: "loss",
      amount: "+$32.55",
    },
    {
      date: "Dec 1, 2025",
      method: t("dice"),
      icon: <FaDice />,
      status: "win",
      amount: "+$32.55",
    },
    {
      date: "Dec 1, 2025",
      method: t("slot"),
      icon: <GiCardAceSpades />,
      status: "win",
      amount: "+$32.55",
    },
    {
      date: "Dec 1, 2025",
      method: t("crash"),
      icon: <FaRocket />,
      status: "loss",
      amount: "+$32.55",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A1F2D] lg:p-6 p-2 mt-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <FaGamepad className="text-white text-xl" />
          </div>
          <h1 className="text-white text-2xl font-bold">{t("title")}</h1>
        </div>

        {/* Table */}
        <div className="bg-[#0B2231] backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-slate-700/50">
            <div className="text-slate-400 text-sm font-medium">
              {t("date")}
            </div>
            <div className="text-slate-400 text-sm font-medium">
              {t("method")}
            </div>
            <div className="text-slate-400 text-sm font-medium">
              {t("status")}
            </div>
            <div className="text-slate-400 text-sm font-medium text-right">
              {t("amount")}
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-700/50">
            {gameHistory.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-slate-700/30 transition-colors"
              >
                <div className="text-slate-300 text-sm">{item.date}</div>

                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <span className="text-slate-400">{item.icon}</span>
                  <span>{item.method}</span>
                </div>

                <div>
                  {item.status === "win" ? (
                    <span className="inline-flex px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/30">
                      {t("win")}
                    </span>
                  ) : (
                    <span className="inline-flex px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium border border-red-500/30">
                      {t("loss")}
                    </span>
                  )}
                </div>

                <div className="text-slate-300 text-sm text-right font-medium">
                  {item.amount}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-slate-700 transition-colors">
            <FaChevronLeft className="text-xs" />
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded bg-red-600 text-white font-medium text-sm">
            1
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-slate-700 transition-colors text-sm">
            2
          </button>

          <span className="text-slate-500 px-2">...</span>

          <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-slate-700 transition-colors text-sm">
            5
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-slate-700 transition-colors text-sm">
            10
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-slate-700 transition-colors">
            <FaChevronRight className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameHistory;
