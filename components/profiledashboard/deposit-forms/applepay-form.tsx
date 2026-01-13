"use client";
import React, { useState } from "react";
import Image from "next/image";
import Applepay from "@/public/Applepay.png";

const ApplepayDepositForm = () => {
  const [selectedAmount, setSelectedAmount] = useState("25");

  const presets = ["25", "50", "100", "200"];

  return (
    <div className="bg-[#0A1F2D] text-white mx-auto px-6 py-8 rounded-lg  border border-slate-800">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <Image
          src={Applepay}
          alt=""
          height={1000}
          width={1000}
          className="h-auto w-auto"
        />
        <p className="text-red-500 font-bold text-sm bg-red-500/10 px-2 py-1 rounded">
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
      <form className="space-y-5">
        {/* Deposit Amount Input */}
        <div className="space-y-2">
          <label className="text-slate-400 text-sm font-medium">
            Deposit Amount: USD
          </label>
          <input
            type="text"
            value={selectedAmount}
            onChange={(e) => setSelectedAmount(e.target.value)}
            className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-4 py-3 focus:outline-none focus:border-[#0051FF] transition-colors text-white font-medium"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-b from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-[0.98] transition-all mt-4 uppercase tracking-wider"
        >
          Deposit Now
        </button>
      </form>
    </div>
  );
};

export default ApplepayDepositForm;
