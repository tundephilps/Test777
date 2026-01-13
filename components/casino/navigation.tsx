"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoGameController, IoSearch } from "react-icons/io5";
import { BiSlider } from "react-icons/bi";
import { GiPokerHand } from "react-icons/gi";
import { FaDice } from "react-icons/fa";
import { MdCasino } from "react-icons/md";
import SearchModal from "@/components//modals/search-modal";

const CasinoNavigation = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileDDRef = useRef<HTMLDivElement | null>(null);
  const [activeModal, setActiveModal] = useState<"search" | null>(null);
  const closeModal = () => setActiveModal(null);

  const navItems = [
    { icon: IoGameController, label: "All Game" },
    { icon: BiSlider, label: "Slots" },
    { icon: MdCasino, label: "Live Casino" },
    { icon: FaDice, label: "Roulette" },
    { icon: GiPokerHand, label: "Plinko" },
  ];

  // Close mobile dropdown on outside click
  useEffect(() => {
    function handleDoc(e: MouseEvent) {
      if (
        mobileDDRef.current &&
        !mobileDDRef.current.contains(e.target as Node)
      ) {
        setMobileDropdownOpen(false);
      }
    }
    if (mobileDropdownOpen) document.addEventListener("mousedown", handleDoc);
    return () => document.removeEventListener("mousedown", handleDoc);
  }, [mobileDropdownOpen]);

  return (
    <div className="w-full text-white  relative z-20">
      {/* ===== MOBILE VIEW (All Game dropdown + search) ===== */}
      <div className="flex md:hidden items-center gap-3 py-4 px-3 z-50">
        {/* Mobile All Game (dropdown) */}
        <div className="relative z-[9999] overflow-visible" ref={mobileDDRef}>
          <button
            aria-haspopup="true"
            aria-expanded={mobileDropdownOpen}
            onClick={() => setMobileDropdownOpen((s) => !s)}
            className="flex items-center gap-2 bg-gradient-to-b from-[#f80507] to-[#860001] text-white px-4 py-2 rounded-md text-sm shadow-lg shadow-red-600/40 whitespace-nowrap"
          >
            <IoGameController className="w-4 h-4" />
            <span>{navItems[activeIndex].label}</span>

            {/* caret */}
            <svg
              className={`w-3 h-3 ml-1 transition-transform ${
                mobileDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.66l3.71-3.47a.75.75 0 111.04 1.08l-4.25 3.98a.75.75 0 01-1.04 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
            </svg>
          </button>

          {/* dropdown list */}
          {mobileDropdownOpen && (
            <div className="absolute left-0 mt-2 w-[220px] bg-[#071421] border border-white/10 rounded-md shadow-lg z-[9999] overflow-visible">
              {navItems.map((item, idx) => {
                const Icon = item.icon;
                const active = idx === activeIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveIndex(idx);
                      setMobileDropdownOpen(false);
                    }}
                    className={`w-full text-left flex items-center gap-3 px-3 py-2 text-sm ${
                      active
                        ? "bg-red-600/10 text-white"
                        : "text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Mobile Search */}
        <div
          className="flex-1 relative"
          onClick={() => setActiveModal("search")}
        >
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for games..."
            className="w-full bg-gray-800/40 text-gray-300 rounded-md pl-10 pr-4 py-2 text-sm placeholder-gray-500 outline-none"
          />
        </div>
      </div>

      {/* ===== DESKTOP VIEW (full nav + search) ===== */}
      <div className="hidden md:flex flex-col lg:flex-row lg:items-center lg:justify-between py-4 border-b border-gray-800 gap-3 px-3">
        {/* full categories (horizontal scroll) */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const active = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                  active
                    ? "bg-gradient-to-b from-[#f80507] to-[#860001] text-white shadow-lg shadow-red-600/40"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* search (desktop) */}
        <div
          className="relative hidden lg:block"
          onClick={() => setActiveModal("search")}
        >
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search for games..."
            className="bg-gray-800/50 text-gray-300 placeholder-gray-500 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 w-64"
          />
        </div>
      </div>
      {/* Single Modal Overlay for ALL modals (Desktop & Mobile) */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-[#081A26] border border-slate-700 w-full max-w-2xl rounded-2xl lg:p-8 p-4 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 rounded-full p-2 text-white transition-colors z-10"
            >
              ✕
            </button>

            {/* Modal Content Switcher */}
            <div className="text-white">
              {activeModal === "search" && <SearchModal />}
            </div>
          </div>
        </div>
      )}

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
};

export default CasinoNavigation;
