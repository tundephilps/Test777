import React from "react";
import WithdrawlHistory from "./withdrawal-history";

const WithdrawDenial = () => {
  return (
    <div>
      <div
        className="w-full mx-auto bg-[#081a26] p-6 rounded-xl text-white space-y-6 shadow-lg"
        style={{ fontFamily: "var(--font-bounded)" }}
      >
        {/* Message */}
        <p className="text-center text-lg leading-relaxed max-w-2xl mx-auto">
          You can't withdraw money as you have an active bonus in your account
          and you have not met the wagering requirement.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#0a1f2d] p-5 rounded-xl text-center">
            <p className="text-sm opacity-70">Wager Required</p>
            <p className="text-2xl font-semibold">67.00 CAD / 0.00 CAD</p>
          </div>

          <div className="bg-[#0a1f2d] p-5 rounded-xl text-center">
            <p className="text-sm opacity-70">Cash Balance</p>
            <p className="text-2xl font-semibold">48.80 CAD</p>
          </div>

          <div className="bg-[#0a1f2d] p-5 rounded-xl text-center">
            <p className="text-sm opacity-70">Bonus Balance</p>
            <p className="text-2xl font-semibold">0.00 CAD</p>
          </div>

          <div className="bg-[#0a1f2d] p-5 rounded-xl text-center">
            <p className="text-sm opacity-70">Total Balance</p>
            <p className="text-2xl font-semibold">48.80 CAD</p>
          </div>
        </div>

        {/* Status Section */}
        <div className="bg-[#0a1f2d] p-6 rounded-xl text-center">
          <p className="text-sm opacity-70 mb-3">Status:</p>

          <div className="flex justify-center space-x-3">
            <span className="px-3 py-1 rounded-md text-xs bg-yellow-600">
              Wagering
            </span>
            <span className="px-3 py-1 rounded-md text-xs bg-red-600">
              Cancel
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawDenial;
