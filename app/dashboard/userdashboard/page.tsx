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
        return <Withdraw />;

      case "game-history":
        return <AddFunds />;
      case "deposit":
        return <Withdraw />;
      case "withdrawal-history":
        return <AddFunds />;
      case "bonus-history":
        return <Withdraw />;
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
