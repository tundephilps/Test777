"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BottomTabItem {
  key: string;
  label: string;
}

const tabMap: Record<string, BottomTabItem[]> = {
  cashier: [
    { key: "add-funds", label: "addFunds" },
    { key: "withdraw", label: "withdrawFunds" },
    { key: "payment-methods", label: "paymentMethods" },
    { key: "transaction-status", label: "transactionStatus" },
  ],
  bonuses: [
    { key: "promotions", label: "promotions" },
    { key: "free-spins", label: "freeSpins" },
    { key: "active-bonuses", label: "activeBonuses" },
    { key: "bonus-rules", label: "bonusRules" },
  ],
  account: [
    { key: "overview", label: "overview" },
    { key: "personal-details", label: "personalDetails" },
    { key: "verification", label: "verification" },
    { key: "responsible-limits", label: "responsibleLimits" },
    { key: "preference", label: "preference" },
  ],
  activity: [
    { key: "game-history", label: "gameHistory" },
    { key: "deposit", label: "depositHistory" },
    { key: "withdrawal-history", label: "withdrawalHistory" },
    { key: "bonus-history", label: "bonusHistory" },
    { key: "cashback-log", label: "cashbackLog" },
  ],
};

export default function BottomTabs({ activeTop }: { activeTop: string }) {
  const t = useTranslations("BottomTabs");
  const pathname = usePathname();
  const bottomTabs = tabMap[activeTop] || [];

  return (
    <div className="flex lg:gap-6 gap-2 mt-4 px-2">
      {bottomTabs.map((tab) => {
        const href = `/${activeTop}/${tab.key}`;
        const isActive = pathname === href;

        return (
          <Link
            key={tab.key}
            href={href}
            className={`pb-1 transition border-b-2 lg:text-sm text-[10px]
              ${
                isActive
                  ? "border-red-600 text-red-500"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }
            `}
          >
            {t(tab.label)}
          </Link>
        );
      })}
    </div>
  );
}
