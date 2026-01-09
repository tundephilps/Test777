"use client";
import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/assets";

export default function SignupModal() {
  const [agree, setAgree] = useState(false);

  return (
    <div className="min-h-auto flex items-center justify-center  lg:px-4">
      <div className="lg:max-w-md w-full text-white space-y-6">
        {/* Header */}
        <div className="text-center">
          <Image
            src={IMAGES.Logo}
            alt="Logo"
            width={100}
            height={25}
            className="object-contain mx-auto h-8 sm:h-10 md:h-12 w-auto"
          />
          <h2 className="text-lg font-semibold text-[#f80507]">
            Join and Try out multiple Platform
          </h2>
          <div className="bg-gradient-to-b from-[#FF0000] to-[#B80000] rounded-xl p-4 mt-3">
            <h3 className="font-semibold text-lg">Welcome Bonus</h3>
            <p className="text-sm opacity-80">Your promo code is BONUS!</p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-3">
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-[#0F2B3C] border border-[#1D3A50] rounded-lg px-3 py-3 placeholder-gray-400 text-sm outline-none"
              placeholder="Enter Email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full bg-[#0F2B3C] border border-[#1D3A50] rounded-lg px-3 py-3 placeholder-gray-400 text-sm outline-none"
              placeholder="Password"
            />
          </div>

          {/* Country + Currency */}
          <div className="flex items-center gap-3">
            <div className="w-1/2">
              <label className="block text-sm mb-1">Country</label>
              <div className="flex items-center bg-[#0F2B3C] border border-[#1D3A50] rounded-lg px-2 py-3">
                {/* <Image src="/flags/ca.png" width={20} height={20} alt="Flag" /> */}
                <select className="flex-1 bg-transparent outline-none pl-2 text-sm">
                  <option>Canada</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
            </div>

            <div className="w-1/2">
              <label className="block text-sm mb-1">Currency</label>
              <select className="w-full bg-[#0F2B3C] border border-[#1D3A50] rounded-lg px-3 py-3 outline-none text-sm">
                <option>USD</option>
                <option>CAD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <div className="flex items-center bg-[#0F2B3C] border border-[#1D3A50] rounded-lg px-2 py-3">
              <input
                type="text"
                placeholder="070 000 000 "
                className="flex-1 bg-transparent outline-none pl-2 text-sm"
              />
            </div>
          </div>

          {/* Checkbox */}
          <label className="flex items-center space-x-2 text-xs">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="accent-red-600"
            />
            <span>
              I am 18 years old and I accept the{" "}
              <span className="text-[#FF4242] underline">Privacy Policy</span>{" "}
              and{" "}
              <span className="text-[#FF4242] underline">
                Terms & Conditions
              </span>
            </span>
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-b from-[#FF0000] to-[#B80000] rounded-lg py-3 font-semibold mt-2"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm opacity-80">
          Already have an account?{" "}
          <span className="text-[#FF4242] underline cursor-pointer">
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}
