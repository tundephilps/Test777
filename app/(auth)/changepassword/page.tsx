"use client";

import React, { useState } from "react";
import Image from "next/image";
import Auth from "../../../public/Auth.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ChangepasswordPage() {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{ fontFamily: "var(--font-bounded)" }}
    >
      {/* Background */}
      <Image
        src={Auth}
        alt="background"
        fill
        className="object-cover"
        priority
      />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex justify-end">
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div className="w-full lg:max-w-md bg-black/20 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-xl">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image
                src="/logo.png"
                alt="Canada777"
                width={200}
                height={200}
                className="h-auto w-auto"
              />
            </div>

            {/* Header */}
            <h2 className="text-red-600 text-2xl font-bold text-center mb-2">
              Change your password
            </h2>
            <p className="text-gray-300 text-sm text-center mb-6">
              Create a new password for your account, make sure the password are
              strong
            </p>

            {/* Old Password */}
            <label className="text-gray-200 text-sm">Enter Old password</label>
            <div className="relative w-full mb-4">
              <input
                type={showOld ? "text" : "password"}
                placeholder="Enter old password"
                className="w-full mt-1 px-4 py-2 placeholder:text-xs rounded-md bg-white/10 
                text-white border border-neutral-700 focus:border-red-500 outline-none pr-10"
              />
              <span
                onClick={() => setShowOld(!showOld)}
                className="absolute right-3 top-[55%] -translate-y-1/2 text-gray-300 cursor-pointer"
              >
                {showOld ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </span>
            </div>

            {/* New Password */}
            <label className="text-gray-200 text-sm">Enter New password</label>
            <div className="relative w-full mb-4">
              <input
                type={showNew ? "text" : "password"}
                placeholder="Enter new password"
                className="w-full mt-1 px-4 py-2 placeholder:text-xs rounded-md bg-white/10 
                text-white border border-neutral-700 focus:border-red-500 outline-none pr-10"
              />
              <span
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-[55%] -translate-y-1/2 text-gray-300 cursor-pointer"
              >
                {showNew ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </span>
            </div>

            {/* Confirm Password */}
            <label className="text-gray-200 text-sm">
              Confirm new password
            </label>
            <div className="relative w-full mb-6">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm new password"
                className="w-full mt-1 px-4 py-2 placeholder:text-xs rounded-md bg-white/10 
                text-white border border-neutral-700 focus:border-red-500 outline-none pr-10"
              />
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-[55%] -translate-y-1/2 text-gray-300 cursor-pointer"
              >
                {showConfirm ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </span>
            </div>

            {/* Submit Button */}
            <button
              className="w-full text-sm cursor-pointer bg-gradient-to-b 
              from-[#f80507] to-[#860001] hover:opacity-90 transition text-white 
              py-3 rounded-md font-semibold shadow-md"
            >
              Create new password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
