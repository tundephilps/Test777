"use client";
import React, { useState } from "react";
import AddFunds from "../../../components/profiledashboard/add-funds";
import Withdraw from "../../../components/profiledashboard/withdraw";
import PaymentMethodSelector from "../../../components/profiledashboard/payment-selector";

import DashboardSummary from "../../../components/profiledashboard/dashboard-summary";
import Profile from "../../../components/profiledashboard/profile";
import Deposit from "../../../components/profiledashboard/deposit";
import BonusTable from "../../../components/profiledashboard/bonus";
import FreeSpins from "../../../components/profiledashboard/free-spins";
import VipCashback from "../../../components/profiledashboard/vipcashback";
import GameLog from "../../../components/profiledashboard/game-log";
import WithdrawFunds from "../../../components/profiledashboard/withdraw-funds";
import PaymentMethods from "../../../components/profiledashboard/payment-method";
import TopTabs from "../../../components/profiledashboard/top-tabs";
import BottomTabs from "../../../components/profiledashboard/bottom-tab";
import TransactionStatus from "../../../components/profiledashboard/transaction-status";
import PromotionsList from "../../../components/profiledashboard/promotions-list";
import ActiveBonuses from "../../../components/profiledashboard/active-bonus";
import BonusRules from "../../../components/profiledashboard/bonus-rules";
import ProfileOverview from "../../../components/profiledashboard/overview";
import PersonalDetails from "../../../components/profiledashboard/personal-details";
import Verification from "../../../components/profiledashboard/verification";
import ResponsibleLimits from "../../../components/profiledashboard/responsible-limit";
import Preferences from "../../../components/profiledashboard/prefrences";
import GameHistory from "../../../components/profiledashboard/game-history";
import DepositHistory from "../../../components/profiledashboard/deposit-history";
import WithdrawlHistory from "../../../components/profiledashboard/withdrawal-history";
import BonusHistory from "../../../components/profiledashboard/bonus-history";

const UserDashboard = () => {
  const [activeTop, setActiveTop] = useState("cashier");
  const [activeBottom, setActiveBottom] = useState("add-funds");

  const renderComponent = () => {
    switch (activeBottom) {
      case "add-funds":
        return <AddFunds />;
      case "withdraw":
        return <Withdraw />;
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
        return <Withdraw />;

      default:
        return <div className="text-white mt-6">Coming soon...</div>;
    }
  };

  return (
    <div>
      {/* <DashboardSummary /> */}
      {/* <Profile /> */}
      {/* <Deposit /> */}
      {/* <BonusTable /> */}
      {/* <FreeSpins /> */}
      {/* <Withdraw /> */}
      {/* <VipCashback /> */}
      {/* <GameLog /> */}
      {/* <AddFunds /> */}
      {/* <WithdrawFunds /> */}
      <div className="lg:p-6 p-2 bg-[#081a26]">
        <TopTabs active={activeTop} onChange={setActiveTop} />

        <BottomTabs
          activeTop={activeTop}
          activeBottom={activeBottom}
          onChange={setActiveBottom}
        />

        {renderComponent()}
      </div>

      {/* <PaymentMethods /> */}
    </div>
  );
};

export default UserDashboard;
