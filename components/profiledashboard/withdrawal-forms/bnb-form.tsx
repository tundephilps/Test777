"use client";
import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import React, { useState } from "react";
import { FaBitcoin } from "react-icons/fa";

const BNBWithdrawForm = () => {
  const [network, setNetwork] = useState("BTC");

  return (
    <div className="bg-[#0A1F2D] text-white mx-auto px-6 py-8 rounded-lg  border border-slate-800 shadow-2xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
        {/* Left: BTC Logo & Min Amount */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Image
            src={IMAGES.BNB}
            alt=""
            className="h-12 w-auto"
            width={1000}
            height={1000}
          />
          <p className="text-red-500 font-bold text-lg mt-1">Min 50.00</p>
        </div>

        {/* Right: Balance Stats */}
        <div className="flex flex-col items-end space-y-2 text-sm">
          <div className="flex justify-between w-48 border-b border-slate-800 pb-1">
            <span className="text-slate-400">Balance</span>
            <span className="text-red-500 font-bold">0.00 USD</span>
          </div>
          <div className="flex justify-between w-48 border-b border-slate-800 pb-1">
            <span className="text-slate-400">Withdrawable</span>
            <span className="text-red-500 font-bold">0.00 USD</span>
          </div>
          <div className="flex justify-between w-48 border-b border-slate-800 pb-1">
            <span className="text-slate-400">Lock By Bonus</span>
            <span className="text-red-500 font-bold">0.00 USD</span>
          </div>
        </div>
      </div>

      <div className="h-px bg-blue-500/20 w-full mb-8" />

      {/* Form Fields */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Withdraw Amount Input */}
          <div className="space-y-2">
            <label className="text-slate-400 text-sm font-medium ml-1">
              Withdraw Amount:
            </label>
            <input
              type="number"
              placeholder="Withdraw Amount"
              className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
            />
          </div>

          {/* Coin Network Select */}
          <div className="space-y-2">
            <label className="text-slate-400 text-sm font-medium ml-1">
              Choose Coin Network:
            </label>
            <div className="relative">
              <select
                value={network}
                onChange={(e) => setNetwork(e.target.value)}
                className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors text-white font-medium appearance-none cursor-pointer"
              >
                <option value="BTC">BTC</option>
                <option value="BEP20">BSC (BEP20)</option>
                <option value="TRC20">TRON (TRC20)</option>
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

        {/* Crypto Address Full Width */}
        <div className="space-y-2">
          <label className="text-slate-400 text-sm font-medium ml-1">
            Crypto Address:
          </label>
          <input
            type="text"
            placeholder="Crypto Address"
            className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600"
          />
        </div>

        {/* Warning Text */}
        <div className="py-2">
          <p className="text-xs text-slate-400 leading-relaxed italic">
            Please ensure the{" "}
            <span className="text-white font-bold">
              selected coin and network match
            </span>{" "}
            your receiving wallet or exchange. Transactions sent to an{" "}
            <span className="text-white font-bold underline">
              incorrect or unsupported network or address are irreversible
            </span>
            , and our brand will not be responsible.
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white w-full text-xs font-bold py-3 px-10 rounded-full shadow-[0_4px_15px_rgba(232, 4, 35, 0.3)] transform active:scale-[0.95] transition-all uppercase tracking-wider text-sm"
          >
            Withdraw
          </button>
        </div>
      </form>
    </div>
  );
};

export default BNBWithdrawForm;
