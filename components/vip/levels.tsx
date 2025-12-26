"use client";
import Image from "next/image";
import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface LevelData {
  level: number;
  compPoints: string;
  cashback: string;
  wager: string;
  specialEvent: boolean;
  personalManager: boolean;
}

const levelsData: LevelData[] = [
  {
    level: 1,
    compPoints: "0-29999",
    cashback: "10%",
    wager: "x35",
    specialEvent: false,
    personalManager: false,
  },
  {
    level: 2,
    compPoints: "0-29999",
    cashback: "12%",
    wager: "x30",
    specialEvent: false,
    personalManager: false,
  },
  {
    level: 3,
    compPoints: "0-29999",
    cashback: "15%",
    wager: "x25",
    specialEvent: false,
    personalManager: true,
  },
  {
    level: 4,
    compPoints: "0-29999",
    cashback: "18%",
    wager: "x20",
    specialEvent: true,
    personalManager: true,
  },
  {
    level: 5,
    compPoints: "0-29999",
    cashback: "20%",
    wager: "x15",
    specialEvent: true,
    personalManager: true,
  },
  {
    level: 6,
    compPoints: "0-29999",
    cashback: "22%",
    wager: "x10",
    specialEvent: true,
    personalManager: true,
  },
  {
    level: 7,
    compPoints: "0-29999",
    cashback: "25%",
    wager: "x5",
    specialEvent: true,
    personalManager: true,
  },
  {
    level: 8,
    compPoints: "0-29999",
    cashback: "30%",
    wager: "x3",
    specialEvent: true,
    personalManager: true,
  },
];

const LevelCard: React.FC = () => {
  const t = useTranslations("VipPage");

  return (
    <div className="space-y-6 mt-6">
      {levelsData.map((levelData) => (
        <div
          key={levelData.level}
          className="w-full bg-gradient-to-r from-[#071e2b] to-[#1c0f23] rounded-xl p-6 lg:px-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          {/* Left Badge */}
          <div className="flex flex-col items-center flex-shrink-0">
            <Image
              src={`/Level${levelData.level}.png`}
              alt={`Level ${levelData.level}`}
              width={120}
              height={120}
              className="h-auto w-auto"
            />
          </div>

          {/* Center Stats */}
          <div className="items-center flex flex-col gap-4">
            <p
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-bounded)" }}
            >
              {t("level_label")} {levelData.level}
            </p>
            <div
              style={{ fontFamily: "var(--font-bounded)" }}
              className="flex flex-col md:flex-row items-center gap-12 border border-[#f80507] bg-black/20 px-6 py-4 rounded-xl"
            >
              <div className="flex flex-col text-center">
                <p className="text-4xl font-bold">{levelData.compPoints}</p>
                <p className="text-xs opacity-60">{t("comp_points")}</p>
              </div>

              <div className="w-px h-10 bg-white/20 hidden md:block"></div>

              <div className="flex flex-col text-center">
                <p className="text-4xl font-bold">{levelData.cashback}</p>
                <p className="text-xs opacity-60">{t("daily_cashback")}</p>
              </div>

              <div className="w-px h-10 bg-white/20 hidden md:block"></div>

              <div className="flex flex-col text-center">
                <p className="text-4xl font-bold">{levelData.wager}</p>
                <p className="text-xs opacity-60">{t("wager")}</p>
              </div>
            </div>

            {/* Right Perks */}
            <div className="flex flex-row items-center gap-3">
              <div className="flex items-center gap-2">
                <p className="text-base font-semibold">{t("special_event")}</p>
                {levelData.specialEvent ? (
                  <FaCheckCircle className="text-green-500 text-xl" />
                ) : (
                  <IoCloseCircleSharp className="text-red-500 text-xl" />
                )}
              </div>

              <div className="w-px h-4 bg-white/20 hidden md:block"></div>

              <div className="flex items-center gap-2">
                <p className="text-base font-semibold">
                  {t("personal_manager")}
                </p>
                {levelData.personalManager ? (
                  <FaCheckCircle className="text-green-500 text-xl" />
                ) : (
                  <IoCloseCircleSharp className="text-red-500 text-xl" />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LevelCard;
