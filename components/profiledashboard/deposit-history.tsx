import React, { useState } from "react";
import { FaWallet, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function DepositHistory() {
  const [currentPage, setCurrentPage] = useState(1);

  const depositHistory = [
    {
      date: "Dec 1, 2025",
      method: "Card",
      status: "in-progress",
      amount: "+$32.55",
    },
    {
      date: "Dec 1, 2025",
      method: "Wallet",
      status: "completed",
      amount: "+$32.55",
    },
    {
      date: "Dec 1, 2025",
      method: "Crypto",
      status: "pending",
      amount: "+$32.55",
    },
    {
      date: "Dec 1, 2025",
      method: "Wallet",
      status: "completed",
      amount: "+$32.55",
    },
    {
      date: "Dec 1, 2025",
      method: "Card",
      status: "in-progress",
      amount: "+$32.55",
    },
    {
      date: "Dec 1, 2025",
      method: "Wallet",
      status: "completed",
      amount: "+$32.55",
    },
    {
      date: "Dec 1, 2025",
      method: "Wallet",
      status: "completed",
      amount: "+$32.55",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/30">
            Completed
          </span>
        );
      case "in-progress":
        return (
          <span className="inline-flex px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium border border-orange-500/30">
            In Progress
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium border border-yellow-500/30">
            Pending
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1f2d] mt-6 lg:p-6 p-2">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <FaWallet className="text-white text-xl" />
          </div>
          <h1 className="text-white text-2xl font-bold">Deposit History</h1>
        </div>

        {/* Table */}
        <div className="bg-[#0b2231] backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-slate-700/50">
            <div className="text-slate-400 text-sm font-medium">Date</div>
            <div className="text-slate-400 text-sm font-medium">Method</div>
            <div className="text-slate-400 text-sm font-medium">Status</div>
            <div className="text-slate-400 text-sm font-medium text-right">
              Amount
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-700/50">
            {depositHistory.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 px-6 py-4 hover:bg-slate-700/30 transition-colors"
              >
                <div className="text-slate-300 text-sm">{item.date}</div>
                <div className="text-slate-300 text-sm">{item.method}</div>
                <div>{getStatusBadge(item.status)}</div>
                <div className="text-slate-300 text-sm text-right font-medium">
                  {item.amount}
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
