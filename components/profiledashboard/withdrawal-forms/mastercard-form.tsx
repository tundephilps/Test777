"use client";
import Image from "next/image";
import React from "react";

import { IMAGES } from "@/lib/assets";

const MastercardWithdrawalForm = () => {
  return (
    <div className="bg-[#0A1F2D] text-white mt-8 mx-auto px-6 py-8 rounded-lg">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <Image
            src={IMAGES.mastercard}
            alt=""
            height={1000}
            width={1000}
            className="h-auto w-auto"
          />
          <p className="text-red-400 text-sm">Min 50.00</p>
        </div>

        <div className="text-right space-y-1 text-sm">
          <p>
            <span className="text-gray-400">Balance:</span>{" "}
            <span className="text-red-400 font-semibold">0.00 USD</span>
          </p>
          <p>
            <span className="text-gray-400">Withdrawable:</span>{" "}
            <span className="text-red-400 font-semibold">0.00 USD</span>
          </p>
          <p>
            <span className="text-gray-400">Lock By Bonus:</span>{" "}
            <span className="text-red-400 font-semibold">0.00 USD</span>
          </p>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Card Number */}
        <div>
          <label className="text-gray-300 text-sm">Card Number:</label>
          <input
            type="text"
            placeholder="Card Number"
            className="mt-1 w-full bg-[#0a1f33] border border-[#0f2a44] rounded-md px-3 py-2 focus:outline-none focus:border-red-500 placeholder-gray-400"
          />
        </div>

        {/* Withdraw + Expire Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-300 text-sm">
              Withdraw Amount (USD):
            </label>
            <input
              type="number"
              placeholder="Withdraw Amount"
              className="mt-1 w-full bg-[#0a1f33] border border-[#0f2a44] rounded-md px-3 py-2 focus:outline-none focus:border-red-500 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Expire Date:</label>
            <input
              type="text"
              placeholder="Expire Date (MM/YY)"
              className="mt-1 w-full bg-[#0a1f33] border border-[#0f2a44] rounded-md px-3 py-2 focus:outline-none focus:border-red-500 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Name + Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-300 text-sm">Card Name:</label>
            <input
              type="text"
              placeholder="Card Name"
              className="mt-1 w-full bg-[#0a1f33] border border-[#0f2a44] rounded-md px-3 py-2 focus:outline-none focus:border-red-500 placeholder-gray-400"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Phone:</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="mt-1 w-full bg-[#0a1f33] border border-[#0f2a44] rounded-md px-3 py-2 focus:outline-none focus:border-red-500 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-600 to-red-800 py-3 rounded-md text-white font-semibold hover:opacity-90 mt-2"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default MastercardWithdrawalForm;
