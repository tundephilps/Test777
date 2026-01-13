"use client";
import { useState } from "react";
import { IoAlertCircle } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Form = () => {
  const [amount, setAmount] = useState(0);
  const presetAmounts = [50, 100, 250, 500];

  const handleSelect = (value) => {
    setAmount(value);
  };

  return (
    <div className=" mx-auto bg-[#081a26] text-white p-6 rounded-2xl space-y-6 shadow-lg">
      <div>
        <h2 className="text-xl font-semibold">Withdraw Funds</h2>
        <p className="text-sm text-gray-400 mt-1">
          Last withdrawal: $250 · Approved
        </p>
      </div>

      <div className="border border-[#f80507] rounded-xl p-4 bg-[#0a1f2d]">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Available to Withdraw</p>
            <p className="text-xs text-gray-500 mt-2 inline-flex gap-1">
              <IoAlertCircle size={16} />
              Minimum withdrawal: $10
            </p>
          </div>
          <p className="text-xl font-bold text-[#f80507]">$1,200</p>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-300 mb-3">Select Amount</p>
        <div className="grid grid-cols-4 gap-3">
          {presetAmounts.map((value) => (
            <button
              key={value}
              onClick={() => handleSelect(value)}
              className={`py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                amount === value
                  ? "bg-red-600 border-red-600 text-white"
                  : "bg-[#0a1f2d] border-gray-700 text-gray-300 hover:bg-gray-800"
              }`}
            >
              ${value}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-300">Custom amount</label>
        <input
          type="number"
          placeholder="$0"
          value={amount === 0 ? "" : amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full mt-2 py-3 px-4 bg-[#0a1f2d] border border-gray-700 rounded-xl text-gray-200 focus:outline-none focus:border-red-500"
        />
      </div>

      <p className="text-[#f80507] text-sm font-medium">Withdraw Max ($1200)</p>

      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <IoMdCheckmarkCircleOutline className="text-[#f80507]" size={18} />
        <p>Withdrawals are typically processed within 24 hours</p>
      </div>

      <button className="w-full py-4 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 rounded-xl text-center font-semibold text-white text-lg shadow-md transition-all duration-200">
        Withdraw →
      </button>
    </div>
  );
};

export default Form;
