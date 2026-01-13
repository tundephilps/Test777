"use client";

import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaTelegramPlane,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";

const LoginModal = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" flex items-center justify-center  w-full  bg-[#081A26] lg:px-4 px-0  py-8">
      <div className="  bg-transparent text-white lg:min-w-xl min-w-5/6 w-full">
        {/* Title */}
        <Image
          src={IMAGES.Logo}
          alt="Logo"
          width={100}
          height={25}
          className="object-contain mx-auto h-8 sm:h-10 md:h-12 w-auto"
        />
        <h1 className="text-center text-xl font-bold text-red-500 mb-8">
          Welcome, Captain. Let’s <br /> start the Spin!
        </h1>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full px-4 py-3 rounded-lg bg-[#0b1f2b] placeholder-gray-500 border border-transparent focus:border-red-600 outline-none transition"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-[#0b1f2b] placeholder-gray-500 border border-transparent focus:border-red-600 outline-none transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full bg-gradient-to-b from-[#f80507] to-[#860001] py-3 rounded-lg font-semibold text-white mt-2 hover:opacity-90 transition">
          Login
        </button>

        {/* Links */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Forget password
          <span className="text-red-500 cursor-pointer ml-1 hover:underline">
            Click Here.
          </span>
        </p>

        <p className="text-center text-gray-400 text-sm mt-1">
          New here?
          <span className="text-red-500 cursor-pointer ml-1 hover:underline">
            Create an account
          </span>
        </p>

        {/* Social Buttons */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <FaTelegramPlane className="text-[#2ca3e1] hover:scale-110 cursor-pointer text-2xl" />
          <FaGoogle className="text-white hover:scale-110 cursor-pointer text-2xl" />
          <FaFacebookF className="text-[#1877f2] hover:scale-110 cursor-pointer text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
