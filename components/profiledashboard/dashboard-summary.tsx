import React from "react";

const DashboardSummary = () => {
  return (
    <div className="w-full bg-[#081a26] rounded-xl  p-6 text-white space-y-8">
      {/* Top 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Withdrawable */}
        <div className="bg-[#0a1f2d] rounded-lg p-5 text-center">
          <p className="text-sm text-gray-300">Withdrawable</p>
          <p className="text-2xl font-semibold mt-1">48.80 CAD</p>
        </div>

        {/* Lock By Bonus */}
        <div className="bg-[#0a1f2d] rounded-lg p-5 text-center">
          <p className="text-sm text-gray-300">Lock By Bonus</p>
          <p className="text-2xl font-semibold mt-1">0.00 CAD</p>
        </div>

        {/* Cashback */}
        <div className="bg-[#0a1f2d] rounded-lg p-5 text-center">
          <p className="text-sm text-gray-300">Cashback</p>
          <p className="text-2xl font-semibold mt-1">0.00 CAD</p>
        </div>

        {/* Total */}
        <div className="bg-[#0a1f2d] rounded-lg p-5 text-center">
          <p className="text-sm text-gray-300">Total</p>
          <p className="text-2xl font-semibold mt-1">48.80 CAD</p>
        </div>
      </div>

      {/* Freespin Section */}
      <div className="bg-[#0a1f2d] rounded-lg p-6 text-center">
        <p className="text-sm text-gray-300">Freespin</p>

        <p className="text-2xl font-semibold mt-1">
          14{" "}
          <span className="text-red-500 cursor-pointer hover:underline">
            / Play
          </span>
        </p>
      </div>

      {/* User Info */}
      <div className="text-center space-y-2 pt-4">
        <p className="text-xl font-semibold">Evant Evagludе, 33</p>
        <p className="text-gray-300">Canada, Canada</p>
        <p className="text-gray-300">Canada</p>
      </div>
    </div>
  );
};

export default DashboardSummary;
