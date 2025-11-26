import React from "react";
import WithdrawlHistory from "./withdrawal-history";
import BalanceCard from "./balance-card";

const Withdraw = () => {
  return (
    <div>
      <BalanceCard />
      <div className="w-[95vw] lg:w-full overflow-x-auto overscroll-x-auto">
        <WithdrawlHistory />
      </div>
    </div>
  );
};

export default Withdraw;
