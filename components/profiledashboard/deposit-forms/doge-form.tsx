"use client";
import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import React, { useState } from "react";
import { FaBitcoin } from "react-icons/fa";

const DogeDepositForm = () => {
  const [selectedAmount, setSelectedAmount] = useState("25");
  const [network, setNetwork] = useState("BTC");

  const presets = ["25", "50", "100", "200"];

  return (
    <div className="bg-[#0A1F2D] text-white mx-auto px-6 py-8 rounded-lg  border border-slate-800">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={IMAGES.Doge}
          alt=""
          className="h-12 w-auto"
          width={1000}
          height={1000}
        />
        <p className="text-red-500 font-bold text-lg bg-red-500/10 px-3 py-1 rounded">
          Min: 15 USD
        </p>
      </div>

      {/* Amount Preset Bubbles */}
      <div className="flex flex-wrap gap-3 mb-8">
        {presets.map((amount) => (
          <button
            key={amount}
            onClick={() => setSelectedAmount(amount)}
            className={`px-6 py-2 rounded-full font-semibold transition-all border ${
              selectedAmount === amount
                ? "bg-[#0051FF] border-[#0051FF] shadow-[0_0_15px_rgba(0,81,255,0.4)]"
                : "bg-transparent border-slate-600 hover:border-[#0051FF] text-slate-300"
            }`}
          >
            {amount} USD
          </button>
        ))}
      </div>

      {/* Form Fields */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Deposit Amount Input */}
          <div className="space-y-2">
            <label className="text-slate-400 text-sm font-medium">
              Deposit Amount: USD
            </label>
            <input
              type="text"
              value={selectedAmount}
              onChange={(e) => setSelectedAmount(e.target.value)}
              className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors text-white font-medium"
            />
          </div>

          {/* Coin Network Select */}
          <div className="space-y-2">
            <label className="text-slate-400 text-sm font-medium">
              Choose Coin Network
            </label>
            <div className="relative">
              <select
                value={network}
                onChange={(e) => setNetwork(e.target.value)}
                className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors text-white font-medium appearance-none cursor-pointer"
              >
                <option value="BTC">DOGE</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-b from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-[0.98] transition-all mt-4 uppercase tracking-wider"
        >
          Deposit Now
        </button>
      </form>

      {/* Info Section */}
      <div className="mt-8 p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
        <p className="text-xs text-slate-400 leading-relaxed">
          <span className="text-red-500 font-bold">Note:</span> Please ensure
          you are sending <span className="text-white font-bold">DOGE</span>{" "}
          over the correct network. Sending any other currency to this address
          may result in the permanent loss of your funds.
        </p>
      </div>
    </div>
  );
};

export default DogeDepositForm;
