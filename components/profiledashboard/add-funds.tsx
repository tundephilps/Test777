"use client";

import { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { PiWalletBold } from "react-icons/pi";
import { SiBitcoinsv } from "react-icons/si";
import { IoChevronForward } from "react-icons/io5";

export default function AddFunds() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedMethod, setSelectedMethod] = useState("card");

  const amounts = [10, 25, 50, 100, 250, 500];

  const paymentMethods = [
    {
      id: "card",
      name: "Credit Card",
      subtitle: "Visa, Mastercard",
      icon: <FaCreditCard className="text-red-500 text-xl" />,
    },
    {
      id: "ewallet",
      name: "E-Wallet",
      subtitle: "Skrill, Neteller",
      icon: <PiWalletBold className="text-gray-400 text-xl" />,
    },
    {
      id: "crypto",
      name: "Crypto",
      subtitle: "BTC, ETH, USDT",
      icon: <SiBitcoinsv className="text-gray-400 text-xl" />,
    },
  ];

  return (
    <div className="w-full  mx-auto bg-[#081a26] p-6 sm:p-8 rounded-2xl shadow-2xl text-white">
      {/* Header */}
      <div className="flex items-center gap-3">
        <FaCreditCard className="text-red-500 text-2xl" />
        <div>
          <h2 className="text-xl font-semibold">Add Funds</h2>
          <p className="text-gray-400 text-sm">
            Last deposit: <span className="text-gray-300">$100</span> · Today
          </p>
        </div>
      </div>

      {/* Select Amount */}
      <h3 className="mt-8 mb-3 text-gray-300 text-sm">Select Amount</h3>

      <div className="grid grid-cols-3 gap-3">
        {amounts.map((amt) => (
          <button
            key={amt}
            onClick={() => {
              setSelectedAmount(amt);
              setCustomAmount("");
            }}
            className={`py-3 rounded-lg text-center border transition-all font-medium
              ${
                selectedAmount === amt
                  ? "bg-gradient-to-b from-[#f80507]/20 to-[#860001]/20 hover:opacity-90 border-red-700 text-red-400"
                  : "bg-[#0a1f2d] border-[#132534] text-gray-300 hover:border-gray-500"
              }
            `}
          >
            ${amt}
          </button>
        ))}
      </div>

      {/* Custom Amount */}
      <div className="mt-4">
        <input
          type="number"
          placeholder="$  Custom amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount(null);
          }}
          className="w-full bg-[#0a1f2d] border border-[#132534] rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 outline-none focus:border-red-600"
        />
      </div>

      {/* Payment Method */}
      <h3 className="mt-8 mb-3 text-gray-300 text-sm">Payment Method</h3>

      <div className="flex flex-col gap-3">
        {paymentMethods.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelectedMethod(m.id)}
            className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all
              ${
                selectedMethod === m.id
                  ? "border-red-600 bg-red-900/20"
                  : "border-[#132534] bg-[#0c1d2a]"
              }
            `}
          >
            <div className="flex items-center gap-3">
              {m.icon}
              <div className="text-left">
                <p className="font-medium">{m.name}</p>
                <p className="text-gray-400 text-sm">{m.subtitle}</p>
              </div>
            </div>

            {/* Radio circle */}
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition
              ${
                selectedMethod === m.id
                  ? "border-red-600"
                  : "border-gray-500/40"
              }`}
            >
              {selectedMethod === m.id && (
                <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90"></div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Submit Button */}
      <button className="w-full mt-8 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 text-white py-3 text-center rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg  transition">
        Deposit ${selectedAmount ?? (customAmount || "0")}
        <IoChevronForward className="text-lg" />
      </button>
    </div>
  );
}
