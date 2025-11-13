"use client";
import React, { useState } from "react";
import { FaCoins, FaUserCircle } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import {
  MdAccountBalanceWallet,
  MdKeyboardArrowDown,
  MdMenu,
} from "react-icons/md";
import Image from "next/image";
import Logo from "../../public/Logo.png";
import Reward from "../../public/Rewards.png";
import Coin from "../../public/Coin.png";
import Face from "../../public/Face.png";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="bg-[#061621] text-white text-sm w-full">
      {/* Main Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 w-full">
        {/* Left Section */}
        <div className="flex items-center space-x-3 sm:space-x-6 md:space-x-[100px] lg:space-x-[200px]">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              width={100}
              height={25}
              className="object-contain h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          {/* Rewards - Hidden on mobile */}
          <div className="hidden md:block">
            <Image src={Reward} className="h-6 md:h-8 w-auto" alt="Rewards" />
          </div>
        </div>

        {/* Right Section - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="bg-gradient-to-b from-[#ffffff]/20 to-[#071a26] inline-flex p-1 rounded-md hover:opacity-90 cursor-pointer">
            {/* Balance */}
            <div className="flex items-center space-x-2 px-3 py-1 rounded-md">
              <Image src={Coin} className="h-6 w-auto" alt="Coin" />
              <span className="text-[#757e84]">0.0002745</span>
              <div className="bg-[#182935] p-1 rounded-full">
                <MdKeyboardArrowDown />
              </div>
            </div>

            {/* Deposit Button */}
            <button className="flex items-center space-x-1 bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 px-3 py-1.5 rounded-md text-white font-medium transition">
              <span>DEPOSIT</span>
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
            <Image src={Face} className="w-10 h-10" alt="Profile" />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold">Mitchell</span>
              <span className="text-[10px] bg-[#1e141e] border-[#ea0000] text-[#f80507] w-10 border rounded-sm p-1 text-center">
                LVL 27
              </span>
            </div>
          </div>
        </div>

        {/* Right Section - Mobile */}
        <div className="flex md:hidden items-center space-x-2">
          {/* Balance - Compact */}
          <div className="flex items-center space-x-1 bg-gradient-to-b from-[#ffffff]/20 to-[#071a26] px-2 py-1.5 rounded-md text-xs">
            <Image src={Coin} className="h-4 w-auto" alt="Coin" />
            <span className="text-[#757e84]">0.00027</span>
          </div>

          {/* User Avatar */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="w-9 h-9 flex items-center justify-center"
          >
            <Image src={Face} className="w-9 h-9" alt="Profile" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMobileMenu && (
        <div className="md:hidden bg-[#0a1f2e] border-t border-gray-800 px-3 py-4 space-y-3">
          {/* User Info */}
          <div className="flex items-center space-x-3 pb-3 border-b border-gray-800">
            <Image src={Face} className="w-12 h-12" alt="Profile" />
            <div className="flex flex-col">
              <span className="text-base font-semibold">Mitchell</span>
              <span className="text-xs bg-[#1e141e] border-[#ea0000] text-[#f80507] w-12 border rounded-sm p-1 text-center mt-1">
                LVL 27
              </span>
            </div>
          </div>

          {/* Balance Display */}
          <div className="flex items-center justify-between bg-gradient-to-b from-[#ffffff]/20 to-[#071a26] p-3 rounded-md">
            <div className="flex items-center space-x-2">
              <Image src={Coin} className="h-6 w-auto" alt="Coin" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Balance</span>
                <span className="text-white font-semibold">0.0002745</span>
              </div>
            </div>
            <MdKeyboardArrowDown className="text-gray-400" />
          </div>

          {/* Rewards */}
          <div className="flex items-center justify-center py-2">
            <Image src={Reward} className="h-8 w-auto" alt="Rewards" />
          </div>

          {/* Deposit Button */}
          <button className="w-full bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 py-3 rounded-md text-white font-medium transition">
            DEPOSIT
          </button>
        </div>
      )}
    </div>
  );
}
