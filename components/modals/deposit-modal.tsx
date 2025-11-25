"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

// Modal Component
interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DepositModal = ({ isOpen, onClose }: DepositModalProps) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("52");
  const [cardNumber, setCardNumber] = useState("4242424242424242");
  const [expiryDate, setExpiryDate] = useState("20/29/2028");
  const [cvv, setCvv] = useState("CVV");

  const amounts = [25, 50, 100, 200, 250, 500, 750, 1000];

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const handleDeposit = () => {
    console.log("Processing deposit:", {
      amount: customAmount,
      cardNumber,
      expiryDate,
      cvv,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full  max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <FaTimes size={20} />
        </button>

        {/* Amount Selection */}
        <div className="my-6">
          <div className="grid grid-cols-4 gap-2 mb-4">
            {amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => handleAmountClick(amount)}
                className={`py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  selectedAmount === amount
                    ? "bg-gradient-to-b from-[#f80507] to-[#860001] text-white shadow-lg"
                    : "bg-gradient-to-b from-[#f80507] to-[#860001] text-white hover:opacity-80"
                }`}
              >
                {amount} CAD
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount Input */}
        <div className="mb-6">
          <label className="block text-slate-400 text-sm mb-2">
            Deposit Amount (CAD):
          </label>
          <input
            type="text"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
          />
        </div>

        {/* Card Number */}
        <div className="mb-6">
          <label className="block text-slate-400 text-sm mb-2">
            Card Number
          </label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
          />
        </div>

        {/* Expiry Date and CVV */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-slate-400 text-sm mb-2">
              Expiry Date
            </label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-slate-400 text-sm mb-2">
              Card Number
            </label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Deposit Button */}
        <button
          onClick={handleDeposit}
          className="w-full bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 text-white font-bold py-3.5 rounded-lg transition-opacity uppercase tracking-wide"
        >
          DEPOSIT
        </button>
      </div>
    </div>
  );
};
