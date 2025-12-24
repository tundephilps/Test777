"use client";

import { FiFilter, FiChevronRight } from "react-icons/fi";
import { FaGift } from "react-icons/fa";
import React from "react";
import Image from "next/image";

interface Promo {
  title: string;
  subtitle: string;
  expires: string;
  percent: string;
  badge?: "NEW";
}

const promotions: Promo[] = [
  {
    title: "Welcome Bonus",
    subtitle: "Up to $600 on first deposit",
    expires: "Expires: 7 days",
    percent: "50%",
    badge: "NEW",
  },
  {
    title: "Weekend Booster",
    subtitle: "Extra boost every weekend",
    expires: "Expires: 3 days",
    percent: "20%",
    badge: "NEW",
  },
  {
    title: "Cashback Tuesday",
    subtitle: "Get 10% back on losses",
    expires: "Expires: 5 days",
    percent: "10%",
  },
  {
    title: "Reload Bonus",
    subtitle: "On deposits over $50",
    expires: "Expires: Ongoing",
    percent: "25%",
  },
  {
    title: "High Roller",
    subtitle: "VIP exclusive bonus",
    expires: "Expires: Limited",
    percent: "10%",
  },
];

export default function PromotionsList() {
  return (
    <div
      className="bg-[#0a1f2d] mt-6 lg:p-6 p-2 rounded-xl text-white"
      style={{ fontFamily: "var(--font-bounded)" }}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="lg:text-xl text-base  flex items-center gap-2">
          <Image
            src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Speak.png"
            className="h-auto w-auto"
            alt=""
          />
          Available Promotions
        </h2>

        <button className="flex items-center text-xs gap-2 border border-white/20 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 transition">
          <FiFilter size={18} /> Filter
        </button>
      </div>

      {/* PROMO LIST */}
      <div className="flex flex-col gap-4">
        {promotions.map((promo, index) => (
          <div
            key={index}
            className="w-full bg-[#082231] rounded-xl p-4 flex justify-between items-center border border-white/10 hover:bg-white/10 transition"
          >
            {/* LEFT CONTENT */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className=" font-bold">{promo.title}</h3>

                {promo.badge === "NEW" && (
                  <span className="text-xs bg-green-900 text-green-300 border border-green-700 px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                )}
              </div>

              <p className="text-gray-400 lg:text-sm text-xs">
                {promo.subtitle}
              </p>

              <p className="text-gray-500 lg:text-xs text-[10px] mt-1">
                {promo.expires}
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex items-center gap-4">
              <span className="lg:text-2xl text-base font-bold text-yellow-400">
                {promo.percent}
              </span>

              <button className="flex items-center rounded-md cursor-pointer gap-1 bg-white/10 border border-white/20 lg:px-4 px-2 py-1.5 rou hover:white/20 transition">
                <span className="lg:text-sm text-[10px]">Claim</span>
                <FiChevronRight className="text-xs" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
