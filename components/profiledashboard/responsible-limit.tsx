"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { FaShieldAlt, FaPencilAlt, FaBan } from "react-icons/fa";

const ResponsibleLimits = () => {
  const t = useTranslations("ResponsibleLimits");
  const [selfExclusion, setSelfExclusion] = useState(false);

  const limits = [
    {
      title: t("dailyDepositLimit"),
      used: 160,
      remaining: 40,
      max: 200,
      progress: 80,
    },
    {
      title: t("dailyDepositLimit"),
      used: 160,
      remaining: 40,
      max: 200,
      progress: 80,
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#0a1f2d] mt-6 lg:p-6 p-2 rounded-md"
      style={{ fontFamily: "var(--font-bounded)" }}
    >
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 mt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <FaShieldAlt className="text-white text-xl" />
            </div>
            <h1 className="text-white lg:text-2xl text-base font-bold">
              {t("title")}
            </h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-red-500 hover:text-red-400 transition-colors">
            <FaPencilAlt className="text-sm" />
            <span className="font-medium text-xs">{t("editLimits")}</span>
          </button>
        </div>

        {/* Limit Cards */}
        <div className="space-y-6 mb-8">
          {limits.map((limit, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white text-lg font-semibold">
                  {limit.title}
                </h3>
                <span className="text-slate-400 text-sm">
                  ${limit.max} {t("max")}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-3 bg-slate-700 rounded-full overflow-hidden mb-3">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all shadow-lg shadow-red-500/50"
                  style={{ width: `${limit.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">
                  {t("used")}:{" "}
                  <span className="text-slate-300">${limit.used}</span>
                </span>
                <span className="text-slate-400">
                  {t("remaining")}:{" "}
                  <span className="text-slate-300">${limit.remaining}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Self-Exclusion */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                <FaBan className="text-red-500 text-xl" />
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-1">
                  {t("selfExclusion")}
                </h3>
                <p className="text-slate-400 text-sm">{t("takeBreak")}</p>
              </div>
            </div>

            {/* Toggle */}
            <button
              onClick={() => setSelfExclusion(!selfExclusion)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                selfExclusion ? "bg-red-600" : "bg-slate-600"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  selfExclusion ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <div className="mt-4 text-right">
            <span
              className={`text-sm font-medium ${
                selfExclusion ? "text-red-400" : "text-slate-500"
              }`}
            >
              {selfExclusion ? t("on") : t("off")}
            </span>
          </div>
        </div>

        {/* Info Message */}
        <div className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
          <p className="text-slate-400 text-sm text-center">
            {t("infoMessage")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsibleLimits;
