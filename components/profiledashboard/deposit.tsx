import React from "react";
import PaymentMethodSelector from "./add-funds";
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
