import React from "react";
import PaymentMethodSelector from "./payment-selector";
import History from "./history";

const Deposit = () => {
  return (
    <div>
      <PaymentMethodSelector />
      <History />
    </div>
  );
};

export default Deposit;
