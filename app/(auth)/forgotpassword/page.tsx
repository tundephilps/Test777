"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{ fontFamily: "var(--font-bounded)" }}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Auth.png"
        alt="background"
        fill
        className="object-cover"
        priority
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full h-full flex justify-end">
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <div className="w-full lg:max-w-md bg-black/20 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-xl">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Logo.png"
                alt="Canada777"
                width={300}
                height={300}
                className="h-auto w-auto mx-auto"
              />
            </div>

            {/* Header text */}
            <h2 className="text-[#F80507] text-2xl text-center font-bold mb-4">
              Forgot password?
            </h2>

            {/* Username */}
            <label className="text-gray-200 text-sm">Email</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full mt-1 mb-4 px-4 py-2 placeholder:text-xs rounded-md bg-white/10 text-white border border-neutral-700 focus:border-red-500 outline-none"
            />

            {/* Login Button */}
            <Link href="/otp">
              <button className="w-full text-xs cursor-pointer bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 transition text-white py-3 rounded-md font-semibold mt-2 shadow-md">
                Send
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
