"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import AddFunds from "@/components/profiledashboard/add-funds";
import PaymentMethodSelector from "@/components/profiledashboard/payment-selector";
import FreeSpins from "@/components/profiledashboard/free-spins";
import TopTabs from "@/components/profiledashboard/top-tabs";
import BottomTabs from "@/components/profiledashboard/bottom-tab";
import TransactionStatus from "@/components/profiledashboard/transaction-status";
import PromotionsList from "@/components/profiledashboard/promotions-list";
import ActiveBonuses from "@/components/profiledashboard/active-bonus";
import BonusRules from "@/components/profiledashboard/bonus-rules";
import ProfileOverview from "@/components/profiledashboard/overview";
import PersonalDetails from "@/components/profiledashboard/personal-details";
import Verification from "@/components/profiledashboard/verification";
import ResponsibleLimits from "@/components/profiledashboard/responsible-limit";
import Preferences from "@/components/profiledashboard/prefrences";
import GameHistory from "@/components/profiledashboard/game-history";
import DepositHistory from "@/components/profiledashboard/deposit-history";
import WithdrawlHistory from "@/components/profiledashboard/withdrawal-history";
import BonusHistory from "@/components/profiledashboard/bonus-history";
import CashbackLog from "@/components/profiledashboard/cashback-log";
import WithdrawFunds from "@/components/profiledashboard/withdraw-funds";

const UserDashboard = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Extract active tab from URL (e.g., /cashier/add-funds)
  const pathParts = pathname.split("/").filter(Boolean);
  const activeTop = pathParts[0] || "cashier";
  const activeBottom = pathParts[1] || "add-funds";

  const handleTopTabChange = (tab: string) => {
    // Navigate to first bottom tab of the selected top tab
    const defaultBottomTabs: Record<string, string> = {
      cashier: "add-funds",
      bonuses: "promotions",
      account: "overview",
      activity: "game-history",
    };
    router.push(`/${tab}/${defaultBottomTabs[tab]}`);
  };

  const renderComponent = () => {
    switch (activeBottom) {
      case "add-funds":
        return <AddFunds />;
      case "withdraw":
        return <WithdrawFunds />;
      case "payment-methods":
        return <PaymentMethodSelector />;
      case "transaction-status":
        return <TransactionStatus />;

      case "promotions":
        return <PromotionsList />;
      case "free-spins":
        return <FreeSpins />;
      case "active-bonuses":
        return <ActiveBonuses />;
      case "bonus-rules":
        return <BonusRules />;

      case "overview":
        return <ProfileOverview />;
      case "personal-details":
        return <PersonalDetails />;
      case "verification":
        return <Verification />;
      case "responsible-limits":
        return <ResponsibleLimits />;
      case "preference":
        return <Preferences />;

      case "game-history":
        return <GameHistory />;
      case "deposit":
        return <DepositHistory />;
      case "withdrawal-history":
        return <WithdrawlHistory />;
      case "bonus-history":
        return <BonusHistory />;
      case "cashback-log":
        return <CashbackLog />;

      default:
        return <div className="text-white mt-6">Coming soon...</div>;
    }
  };

  return (
    <div>
      <div className="lg:p-6 p-2 bg-[#081a26]">
        <TopTabs active={activeTop} onChange={handleTopTabChange} />

        <BottomTabs activeTop={activeTop} />

        {renderComponent()}
      </div>
    </div>
  );
};

export default UserDashboard;
