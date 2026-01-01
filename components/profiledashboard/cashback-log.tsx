import React, { useState } from "react";
import { FaUndo, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CashbackLog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const cashbackLog = [
    { date: "Dec 1, 2025", percent: "39%", amount: "$150" },
    { date: "Dec 1, 2025", percent: "20%", amount: "$150" },
    { date: "Dec 1, 2025", percent: "38%", amount: "$150" },
    { date: "Dec 1, 2025", percent: "38%", amount: "$150" },
    { date: "Dec 1, 2025", percent: "18%", amount: "$150" },
    { date: "Dec 1, 2025", percent: "55%", amount: "$150" },
    { date: "Dec 1, 2025", percent: "20%", amount: "$150" },
    { date: "Dec 1, 2025", percent: "6%", amount: "$150" },
  ];

  return (
    <div className="min-h-screen bg-[#0a1f2d] lg:p-6 p-2 mt-6 rounded-md">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <FaUndo className="text-white text-xl" />
          </div>
          <h1 className="text-white text-2xl font-bold">Cashback Log</h1>
        </div>

        {/* Table */}
        <div className="bg-[#0B2231] backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-slate-700/50">
            <div className="text-slate-400 text-sm font-medium">Date</div>
            <div className="text-slate-400 text-sm font-medium">Percent</div>
            <div className="text-slate-400 text-sm font-medium text-right">
              Amount
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-700/50">
            {cashbackLog.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 px-6 py-4 hover:bg-slate-700/30 transition-colors"
              >
                <div className="text-slate-300 text-sm">{item.date}</div>
                <div className="text-slate-300 text-sm">{item.percent}</div>
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
};

export default CashbackLog;
