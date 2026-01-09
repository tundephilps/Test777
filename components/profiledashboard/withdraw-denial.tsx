"use client";
import React from "react";
import { useTranslations } from "next-intl";

const WithdrawDenial = () => {
  const t = useTranslations("WithdrawDenial");

  return (
    <div>
      <div
        className="w-full mx-auto bg-[#081a26] p-6 rounded-xl text-white space-y-6 shadow-lg"
        style={{ fontFamily: "var(--font-bounded)" }}
      >
        {/* Message */}
        <p className="text-center text-lg leading-relaxed max-w-2xl mx-auto">
          {t("denialMessage")}
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#0a1f2d] p-5 rounded-xl text-center">
            <p className="text-sm opacity-70">{t("wagerRequired")}</p>
            <p className="text-2xl font-semibold">67.00 CAD / 0.00 CAD</p>
          </div>

          <div className="bg-[#0a1f2d] p-5 rounded-xl text-center">
            <p className="text-sm opacity-70">{t("cashBalance")}</p>
            <p className="text-2xl font-semibold">48.80 CAD</p>
          </div>

          <div className="bg-[#0a1f2d] p-5 rounded-xl text-center">
            <p className="text-sm opacity-70">{t("bonusBalance")}</p>
            <p className="text-2xl font-semibold">0.00 CAD</p>
          </div>

          <div className="bg-[#0a1f2d] p-5 rounded-xl text-center">
            <p className="text-sm opacity-70">{t("totalBalance")}</p>
            <p className="text-2xl font-semibold">48.80 CAD</p>
          </div>
        </div>

        {/* Status Section */}
        <div className="bg-[#0a1f2d] p-6 rounded-xl text-center">
          <p className="text-sm opacity-70 mb-3">{t("statusLabel")}:</p>

          <div className="flex justify-center space-x-3">
            <span className="px-3 py-1 rounded-md text-xs bg-yellow-600">
              {t("statusWagering")}
            </span>
            <button className="px-3 py-1 rounded-md text-xs bg-red-600 hover:bg-red-700 transition-colors">
              {t("cancelBtn")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawDenial;
