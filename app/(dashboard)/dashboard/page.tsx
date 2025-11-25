import React from "react";
import DashboardSummary from "../../../components/profiledashboard/dashboard-summary";
import Profile from "../../../components/profiledashboard/profile";
import PaymentMethodSelector from "../../../components/profiledashboard/payment-selector";
import Deposit from "../../../components/profiledashboard/deposit";
import BonusTable from "../../../components/profiledashboard/bonus";

const Dashboard = () => {
  return (
    <div>
      {/* <DashboardSummary /> */}
      {/* <Profile /> */}
      {/* <Deposit /> */}
      <BonusTable />
    </div>
  );
};

export default Dashboard;
