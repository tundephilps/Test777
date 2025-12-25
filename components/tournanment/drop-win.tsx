"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const DropWin = () => {
  const t = useTranslations("TournamentPage");

  const [timeLeft, setTimeLeft] = useState({
    days: 77,
    hours: 12,
    minutes: 1,
    seconds: 16,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full mx-auto bg-[#081a26] rounded-xl overflow-hidden shadow-2xl mt-8">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-slate-700">
        <h1
          className="text-white text-2xl font-bold"
          style={{ fontFamily: "var(--font-bounded)" }}
        >
          {t("drops_title")}
        </h1>
        <span className="bg-green-500 text-white px-3 py-1 rounded text-sm font-semibold">
          {t("live_badge")}
        </span>
      </div>

      <div className="grid lg:grid-cols-2 lg:px-6 px-2">
        {/* Left Side - Banner Image */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            width={1000}
            height={1000}
            src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Drop.png"
            alt="Drops & Wins"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Info Cards */}
        <div className="grid lg:grid-cols-2 lg:gap-4 gap-2 bg-[#0a1f2d] lg:p-4 p-2">
          {/* Prize Pool Card */}
          <div className="bg-[#1b2c3a] rounded-lg lg:p-5 p-2 border border-[#cd0304]/40 shadow-lg">
            <p className="text-slate-400 text-sm mb-2">{t("prize_pool")}</p>
            <p className="text-yellow-400 text-3xl font-bold">$4,0000</p>
          </div>

          {/* Players Card */}
          <div className="bg-[#1b2c3a] rounded-lg lg:p-5 p-2 border border-[#cd0304]/40 shadow-lg">
            <p className="text-slate-400 text-sm mb-2">{t("players")}</p>
            <p className="text-white text-3xl font-bold">∞</p>
          </div>

          {/* Start Date Card */}
          <div className="bg-[#1b2c3a] rounded-lg lg:p-5 p-2 border border-[#cd0304]/40 shadow-lg">
            <p className="text-slate-400 text-sm mb-2">{t("start_date")}</p>
            <p className="text-white text-lg font-semibold">01.02.2025</p>
            <p className="text-slate-500 text-sm mt-1">00:00</p>
          </div>

          {/* End Date Card */}
          <div className="bg-[#1b2c3a] rounded-lg lg:p-5 p-2 border border-[#cd0304]/40 shadow-lg">
            <p className="text-slate-400 text-sm mb-2">{t("end_date")}</p>
            <p className="text-white text-lg font-semibold">31.01.2026</p>
            <p className="text-slate-500 text-sm mt-1">00:00</p>
          </div>

          {/* Countdown Timer */}
          <div
            className="col-span-2 rounded-lg lg:p-5 p-2 flex items-center justify-center shadow-lg"
            style={{ fontFamily: "var(--font-bounded)" }}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col items-center bg-[#860001]/20 border border-[#f80507] p-2 rounded-md">
                <span className="text-[#f80507] lg:text-4xl text-xl font-bold">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-slate-400 text-xs mt-1">{t("days")}</span>
              </div>

              <span className="text-slate-600 text-3xl font-bold">:</span>

              <div className="flex flex-col items-center bg-[#860001]/20 border border-[#f80507] p-2 rounded-md">
                <span className="text-[#f80507] lg:text-4xl text-xl font-bold">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-slate-400 text-xs mt-1">
                  {t("hours")}
                </span>
              </div>

              <span className="text-slate-600 text-3xl font-bold">:</span>

              <div className="flex flex-col items-center bg-[#860001]/20 border border-[#f80507] p-2 rounded-md">
                <span className="text-[#f80507] lg:text-4xl text-xl font-bold">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-slate-400 text-xs mt-1">
                  {t("minutes")}
                </span>
              </div>

              <span className="text-slate-600 text-3xl font-bold">:</span>

              <div className="flex flex-col items-center bg-[#860001]/20 border border-[#f80507] p-2 rounded-md">
                <span className="text-[#f80507] lg:text-4xl text-xl font-bold">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-slate-400 text-xs mt-1">
                  {t("seconds")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropWin;
