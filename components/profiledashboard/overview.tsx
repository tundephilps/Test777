import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

export default function ProfileOverview() {
  return (
    <div
      className="min-h-screen bg-[#0a1f2d] mt-6 lg:p-6 p-2"
      style={{ fontFamily: "var(--font-bounded)" }}
    >
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 mt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <FaUser className="text-white text-xl" />
            </div>
            <h1 className="text-white lg:text-2xl text-base font-bold">
              Profile Overview
            </h1>
          </div>
        </div>

        {/* Profile Card */}
        <div className="  mb-8">
          {/* User Info Section */}
          <div className="flex items-center gap-4 mb-8 bg-[#0b2231] p-4 rounded-md">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-700 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-white lg:text-3xl text-xl font-bold mb-1">
                Robert Fox
              </h2>
              <p className="text-slate-400 lg:text-sm text-xs mb-2">
                robertfox132@gmail.com
              </p>
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full lg:text-xs text-[10px] font-medium border border-emerald-500/30">
                Silver Member
              </span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="text-center bg-[#0b2231] p-4 rounded-md ">
              <div className="text-3xl font-bold text-red-500 mb-1">$2,450</div>
              <div className="text-slate-400 text-sm">Balance</div>
            </div>
            <div className="text-center bg-[#0b2231] p-4 rounded-md">
              <div className="text-3xl font-bold text-yellow-500 mb-1">
                Silver
              </div>
              <div className="text-slate-400 text-sm">Level</div>
            </div>
            <div className="text-center bg-[#0b2231] p-4 rounded-md">
              <div className="text-3xl font-bold text-white mb-1">Jan 2025</div>
              <div className="text-slate-400 text-sm">Joined</div>
            </div>
          </div>

          {/* Wagering Progress Section */}
          <div className="mb-3 bg-[#0b2231] p-4 rounded-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-white lg:text-base text-xs font-medium">
                <BiTrendingUp className="text-emerald-500" />
                <span>Wagering Progress</span>
              </div>
              <span className="text-red-500 font-semibold">40%</span>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full h-4 bg-slate-700 rounded-full overflow-hidden mb-2">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all shadow-lg shadow-red-500/50"
                style={{ width: "40%" }}
              />
            </div>

            <p className="text-slate-400 lg:text-sm text-xs">
              Wager <span className="text-slate-300">$3,000</span> more to reach
              Gold tier
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
