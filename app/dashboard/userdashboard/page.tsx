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
        return <AddFunds />;
      case "free-spins":
        return <Withdraw />;
      case "active-bonuses":
        return <AddFunds />;
      case "bonus-rules":
        return <Withdraw />;

      case "overview":
        return <AddFunds />;
      case "personal-details":
        return <Withdraw />;
      case "verification":
        return <AddFunds />;
      case "responsible-limits":
        return <Withdraw />;
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
