import React, { useState } from "react";
import { FaGift, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function BonusHistory() {
  const [currentPage, setCurrentPage] = useState(1);

  const bonusHistory = [
    { name: "Welcome Bonus", status: "active", value: "$150" },
    { name: "Free Spins Pack", status: "used", value: "20 Spins" },
    { name: "Free Spins Pack", status: "used", value: "20 Spins" },
    { name: "Welcome Bonus", status: "active", value: "$150" },
    { name: "Free Spins Pack", status: "used", value: "20 Spins" },
    { name: "Welcome Bonus", status: "active", value: "$150" },
    { name: "Free Spins Pack", status: "used", value: "20 Spins" },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return (
          <span className="inline-flex px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium border border-yellow-500/30">
            Active
          </span>
        );
      case "used":
        return (
          <span className="inline-flex px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/30">
            Used
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen mt-6 bg-[#0a1f2d] lg:p-6 p-2">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <FaGift className="text-white text-xl" />
          </div>
          <h1 className="text-white text-2xl font-bold">Bonus History</h1>
        </div>

        {/* Table */}
        <div className="bg-[#0B2231] backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-slate-700/50">
            <div className="text-slate-400 text-sm font-medium">Bonus Name</div>
            <div className="text-slate-400 text-sm font-medium">Status</div>
            <div className="text-slate-400 text-sm font-medium text-right">
              Value
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-700/50">
            {bonusHistory.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-slate-700/30 transition-colors"
              >
                <div className="text-slate-300 text-sm">{item.name}</div>
                <div>{getStatusBadge(item.status)}</div>
                <div className="text-slate-300 text-sm text-right font-medium">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-slate-700 transition-colors">
            <FaChevronLeft className="text-xs" />
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded bg-red-600 text-white font-medium text-sm">
            1
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-slate-700 transition-colors text-sm">
            2
          </button>

          <span className="text-slate-500 px-2">...</span>

          <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-slate-700 transition-colors text-sm">
            9
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-slate-700 transition-colors text-sm">
            10
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:bg-slate-700 transition-colors">
            <FaChevronRight className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
}
