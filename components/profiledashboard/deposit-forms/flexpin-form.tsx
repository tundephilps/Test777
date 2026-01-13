"use client";
import React, { useState } from "react";

const FlexepinDepositForm = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-[#0A1F2D] text-white mx-auto px-6 py-8 rounded-lg  border border-slate-800">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-3xl font-extrabold italic text-white flex items-center">
          flex<span className="text-red-500">e</span>pin
        </h2>
        <p className="text-red-500 font-bold text-sm bg-red-500/10 px-2 py-1 rounded">
          Min: 15 USD
        </p>
      </div>

      <form className="space-y-6">
        {/* Voucher Currency Select */}
        <div className="space-y-2">
          <label className="text-slate-400 text-sm font-medium">
            Voucher Currency: USD
          </label>
          <div className="relative">
            <select className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors text-white font-medium appearance-none cursor-pointer">
              <option value="USD/CAD">USD/CAD</option>
              <option value="USD">USD</option>
              <option value="CAD">CAD</option>
            </select>
            {/* Custom Arrow */}
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

        {/* Voucher Code Input */}
        <div className="space-y-2">
          <label className="text-slate-400 text-sm font-medium">
            Voucher Code:
          </label>
          <input
            type="text"
            placeholder="Enter voucher"
            className="w-full bg-[#0a1f33] border border-[#162e44] rounded-lg px-4 py-3 focus:outline-none focus:border-red-500 transition-colors placeholder-slate-600"
          />
        </div>

        {/* Terms & Conditions Checkbox */}
        <div className="flex items-center gap-3">
          <label className="relative flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="sr-only peer"
            />
            <div className="w-5 h-5 bg-[#0a1f33] border border-[#162e44] rounded peer-checked:bg-red-600 peer-checked:border-red-600 transition-all flex items-center justify-center">
              {agreed && (
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          </label>
          <p className="text-slate-400 text-sm">
            I agree to the Flexepin{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms & Conditions
            </a>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!agreed}
          className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider shadow-lg transition-all mt-4 transform active:scale-[0.98] ${
            agreed
              ? "bg-gradient-to-b from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white"
              : "bg-slate-700 text-slate-400 cursor-not-allowed grayscale"
          }`}
        >
          Deposit Now
        </button>
      </form>

      {/* Security Footer */}
      <div className="mt-8 pt-6 border-t border-slate-800/50 flex justify-center">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest text-center">
          Secure Voucher Redemption Protocol • Fully Encrypted
        </p>
      </div>
    </div>
  );
};

export default FlexepinDepositForm;
