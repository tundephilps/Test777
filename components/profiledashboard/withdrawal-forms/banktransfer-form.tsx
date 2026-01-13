"use client";
import React from "react";
import Image from "next/image";
import Transfer from "@/public/transfer.png";

const BankTransferWithdrawal = () => {
  return (
    <div className="bg-[#0A1F2D] text-white mx-auto px-6 py-8 rounded-lg border border-slate-800 shadow-2xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
        {/* Left: Bank Transfer Logo & Min Amount */}
        <Image
          src={Transfer}
          alt=""
          height={1000}
          width={1000}
          className="h-32 w-52"
        />

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

      {/* Withdrawal Form */}
      <form className="space-y-6">
        {/* Row 1: Withdraw Amount, Beneficiary Name, IBAN, BIC/SWIFT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-slate-400 text-xs font-medium ml-1">
              Withdraw Amount:
            </label>
            <input
              type="text"
              placeholder="Withdraw Amou..."
              className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-slate-400 text-xs font-medium ml-1">
              Beneficiary Name:
            </label>
            <input
              type="text"
              placeholder="Beneficiary Name"
              className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-slate-400 text-xs font-medium ml-1">
              IBAN:
            </label>
            <input
              type="text"
              placeholder="IBAN"
              className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-slate-400 text-xs font-medium ml-1">
              BIC/SWIFT:
            </label>
            <input
              type="text"
              placeholder="BIC/SWIFT"
              className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 text-sm"
            />
          </div>
        </div>

        {/* Row 2: Bank Name, Bank Address, Bank Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-slate-400 text-xs font-medium ml-1">
              Bank Name:
            </label>
            <input
              type="text"
              placeholder="Bank Name"
              className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-slate-400 text-xs font-medium ml-1">
              Bank Address:
            </label>
            <input
              type="text"
              placeholder="Bank Address"
              className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-600 text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-slate-400 text-xs font-medium ml-1">
              Bank Country:
            </label>
            <div className="relative">
              <select className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-3 py-2.5 focus:outline-none focus:border-blue-500 transition-colors text-white text-sm appearance-none cursor-pointer">
                <option value=""></option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-slate-500"
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

        {/* Action Button */}
        <div className="pt-4">
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

export default BankTransferWithdrawal;
