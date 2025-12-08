"use client";

import { useState } from "react";
import { FaGift, FaUser } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineLocalActivity } from "react-icons/md";

interface TabItem {
  key: string;
  label: string;
  icon: React.ReactNode;
}

const topTabs: TabItem[] = [
  {
    key: "cashier",
    label: "Cashier",
    icon: <RiMoneyDollarCircleFill size={16} />,
  },
  { key: "bonuses", label: "Bonuses", icon: <FaGift size={16} /> },
  { key: "account", label: "Account", icon: <FaUser size={16} /> },
  {
    key: "activity",
    label: "Activity",
    icon: <MdOutlineLocalActivity size={16} />,
  },
];

export default function TopTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (tab: string) => void;
}) {
  return (
    <div className="flex lg:gap-3 gap-1 py-4 rounded-xl">
      {topTabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`flex items-center lg:gap-2 gap-1 lg:px-4 px-2 py-2 lg:text-base text-xs rounded-lg transition
            ${
              active === tab.key
                ? "bg-gradient-to-r from-[#860001] via-[#1a1f2f] to-transparent text-white"
                : "bg-white/5 text-gray-400"
            }
          `}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
