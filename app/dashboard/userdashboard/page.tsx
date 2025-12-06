import React from "react";
import DashboardSummary from "../../../components/profiledashboard/dashboard-summary";
import Profile from "../../../components/profiledashboard/profile";
import PaymentMethodSelector from "../../../components/profiledashboard/payment-selector";
import Deposit from "../../../components/profiledashboard/deposit";
import BonusTable from "../../../components/profiledashboard/bonus";
import FreeSpins from "../../../components/profiledashboard/free-spins";
import Withdraw from "../../../components/profiledashboard/withdraw";
import VipCashback from "../../../components/profiledashboard/vipcashback";
import GameLog from "../../../components/profiledashboard/game-log";
import AddFunds from "../../../components/profiledashboard/add-funds";
import WithdrawFunds from "../../../components/profiledashboard/withdraw-funds";
import PaymentMethods from "../../../components/profiledashboard/payment-method";

const UserDashboard = () => {
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
      <PaymentMethods />
    </div>
  );
};

export default UserDashboard;
