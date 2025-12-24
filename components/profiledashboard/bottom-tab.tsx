"use client";
import { useState } from "react";

interface BottomTabItem {
  key: string;
  label: string;
}

const tabMap: Record<string, BottomTabItem[]> = {
  cashier: [
    { key: "add-funds", label: "Add Funds" },
    { key: "withdraw", label: "Withdraw Funds" },
    { key: "payment-methods", label: "Payment Methods" },
    { key: "transaction-status", label: "Transaction Status" },
  ],
  bonuses: [
    { key: "promotions", label: "Promotions" },
    { key: "free-spins", label: "Free Spins" },
    { key: "active-bonuses", label: "Active Bonuses" },
    { key: "bonus-rules", label: "Bonus-Rules" },
  ],
  account: [
    { key: "overview", label: "OverView" },
    { key: "personal-details", label: "Personal Details" },
    { key: "verification", label: "Verification" },
    { key: "responsible-limits", label: "Responsible Limits" },
    { key: "preference", label: "Preference" },
  ],
  activity: [
    { key: "game-history", label: "Game History" },
    { key: "deposit", label: "Deposit History" },
    { key: "withdrawal-history", label: "Withdrawal History" },
    { key: "bonus-history", label: "Bonus History" },
    { key: "cashback-log", label: "Cashback Log" },
  ],
};

export default function BottomTabs({
  activeTop,
  activeBottom,
  onChange,
}: {
  activeTop: string;
  activeBottom: string;
  onChange: (tab: string) => void;
}) {
  const bottomTabs = tabMap[activeTop] || [];

  return (
    <div className="flex lg:gap-6 gap-2 mt-4 px-2">
      {bottomTabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`pb-1 transition border-b-2 lg:text-sm text-[10px]
            ${
              activeBottom === tab.key
                ? "border-red-600 text-red-500"
                : "border-transparent text-gray-400"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
