"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const LoginPage = () => {
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
              Welcome, Captain. Let’s start the Spin!
            </h2>

            {/* Username */}
            <label className="text-gray-200 text-sm">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full mt-1 mb-4 px-4 py-2 placeholder:text-xs rounded-md bg-white/10 text-white border border-neutral-700 focus:border-red-500 outline-none"
            />

            {/* Password */}
            <label className="text-gray-200 text-sm">Password</label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full mt-1 mb-4 px-4 py-2 placeholder:text-xs rounded-md bg-white/10 text-white border border-neutral-700 focus:border-red-500 outline-none pr-10"
              />

              {/* 👁️ Toggle Icon */}
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[40%] -translate-y-1/2 text-gray-300 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </span>
            </div>

            {/* Login Button */}
            <Link href="/dashboard">
              <button className="w-full text-xs cursor-pointer bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 transition text-white py-3 rounded-md font-semibold mt-2 shadow-md">
                Login
              </button>
            </Link>
            {/* Footer Links */}
            <div className="flex justify-between text-sm text-gray-300 mt-4">
              <Link
                href="/forgotpassword"
                className="text-red-500 hover:underline"
              >
                Forgot password?
              </Link>
              <Link href="/signup" className="text-red-500 hover:underline">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
