"use client";
import React, { useState } from "react";
import {
  IoGameController,
  IoSearch,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import { BiSlider } from "react-icons/bi";
import { GiPokerHand } from "react-icons/gi";
import { FaDice } from "react-icons/fa";
import { MdCasino } from "react-icons/md";

export default function CasinoNavigation() {
  const [showSearch, setShowSearch] = useState(false);

  const navItems = [
    { icon: IoGameController, label: "All Game", active: true },
    { icon: BiSlider, label: "Slots", active: false },
    { icon: MdCasino, label: "Live Casino", active: false },
    { icon: FaDice, label: "Roulette", active: false },
    { icon: GiPokerHand, label: "PLINKO", active: false },
  ];

  return (
    <div className="w-full text-white overflow-clip">
      {/* Top Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-gray-800 gap-3">
        {/* Navigation Items - Horizontal Scroll on Mobile */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 sm:pb-0  sm:px-0  sm:mx-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-max  sm:px-0">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  item.active
                    ? "bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 text-white shadow-lg shadow-red-600/50"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-200"
                }`}
              >
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.label.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar - Toggle on Mobile */}
        <div className="px-4 sm:px-0">
          {/* Mobile Search Toggle */}
          <div className="sm:hidden">
            {!showSearch ? (
              <button
                onClick={() => setShowSearch(true)}
                className="flex items-center gap-2 w-full bg-gray-800/50 rounded-md px-4 py-2 text-gray-400 hover:bg-gray-800"
              >
                <IoSearch className="w-5 h-5" />
                <span className="text-sm">Search for games...</span>
              </button>
            ) : (
              <div className="relative">
                <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for games.."
                  autoFocus
                  onBlur={() => setShowSearch(false)}
                  className="bg-gray-800/50 text-gray-300 placeholder-gray-500 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
                />
              </div>
            )}
          </div>

          {/* Desktop Search - Always Visible */}
          <div className="hidden sm:block relative">
            <IoSearch className="absolute left-3 top-1/2  transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search for games.."
              className="bg-gray-800/50 text-gray-300 placeholder-gray-500 rounded-md  pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 w-64"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
