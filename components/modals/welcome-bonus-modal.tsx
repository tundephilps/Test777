"use client";

import { useState } from "react";
import { FaGift, FaLock, FaHeadset, FaEyeSlash, FaEye } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { LuCherry } from "react-icons/lu";

import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Calf from "@/public/Calf.png";
import SignupModal from "./signup-modal";

interface LoginModalProps {
  onClose?: () => void;
}

export default function WelcomeBonusModal({ onClose }: LoginModalProps) {
  const [selectedOption, setSelectedOption] = useState("bonus");
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className="">
      <div className="lg:min-w-3xl min-w-[80vw] ">
        {/* Title */}
        <h1 className="text-center text-3xl font-bold text-red-700 mb-8">
          CHOOSE YOUR WELCOME
          <br />
          BONUS
        </h1>

        {/* Options */}
        <div className="space-y-4 mb-6">
          {/* Main Bonus Option */}
          <div
            onClick={() => setSelectedOption("bonus")}
            className={`relative cursor-pointer rounded-xl border-2 transition-all ${
              selectedOption === "bonus"
                ? "border-red-700 bg-slate-800/60"
                : "border-red-600/50 bg-white/10 hover:border-red-700"
            }`}
          >
            {/* Most Popular Badge */}
            <div className="absolute -top-3 right-4 bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              MOST POPULAR
            </div>

            <div className="flex items-center gap-4 p-5">
              {/* Radio Button */}
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === "bonus"
                    ? "border-red-700 bg-red-700"
                    : "border-slate-700"
                }`}
              >
                {selectedOption === "bonus" && (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>

              {/* Icon */}
              <div className="flex-shrink-0">
                <LuCherry className="text-red-700 text-3xl" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="text-white font-bold text-xl mb-1">
                  620% UP TO $8,000
                </div>
                <div className="text-white text-sm font-semibold">
                  + 600 FREE SPINS
                </div>
              </div>
            </div>
          </div>

          {/* Promo Code Option */}
          <div
            onClick={() => setSelectedOption("promo")}
            className={`cursor-pointer rounded-xl border transition-all ${
              selectedOption === "promo"
                ? "border-red-700 bg-slate-800/60"
                : " bg-white/10 hover:border-red-600"
            }`}
          >
            <div className="flex items-center gap-4 p-5">
              {/* Radio Button */}
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === "promo"
                    ? "border-red-700 bg-red-700"
                    : "border-gray-700"
                }`}
              >
                {selectedOption === "promo" && (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>

              {/* Icon */}
              <div className="flex-shrink-0">
                <FaGift className="text-white text-2xl" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="text-white font-bold text-lg">
                  I HAVE A PROMO CODE
                </div>
              </div>
            </div>
          </div>

          {/* Continue Without Bonus */}
          <div
            onClick={() => setSelectedOption("none")}
            className={`cursor-pointer rounded-xl border-2 transition-all ${
              selectedOption === "none"
                ? "border-red-700 bg-slate-800/60"
                : " bg-white/10 hover:border-red-600"
            }`}
          >
            <div className="flex items-center gap-4 p-5">
              {/* Radio Button */}
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === "none"
                    ? "border-red-700 bg-red-700"
                    : "border-gray-700"
                }`}
              >
                {selectedOption === "none" && (
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                )}
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="text-white font-bold text-lg">
                  CONTINUE WITHOUT BONUS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activate Button */}
        <button
          onClick={() => {
            setShowSignupModal(true); // open signup modal
          }}
          className="w-full bg-red-700 hover:bg-red-700 text-white font-bold text-lg py-4 rounded-xl transition-colors mb-6"
        >
          ACTIVATE & PLAY
        </button>

        {/* Login Link */}
        <div className="text-center text-sm text-gray-300 mb-6">
          Already have an account?{" "}
          <button className="text-red-700 hover:text-red-300 font-semibold">
            Login
          </button>
        </div>

        {/* Return to Site */}
        <div className="text-center mb-6">
          <button className="text-gray-300 hover:text-red-700 text-sm underline">
            Return to site
          </button>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-300 pt-4 border-t border-red-700/50">
          <div className="flex items-center gap-1">
            <FaLock className="text-red-700" />
            <span>SSL SECURE</span>
          </div>

          <div className="flex items-center gap-1">
            <FaHeadset className="text-red-700" />
            <span>24/7 SUPPORT</span>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl h-[90vh] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden flex">
            {/* Close Button */}
            <button
              onClick={() => setShowSignupModal(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-10 w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>

            <SignupModal />
          </div>
        </div>
      )}
    </div>
  );
}
