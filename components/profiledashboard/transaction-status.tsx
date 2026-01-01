import Image from "next/image";
import React, { useState } from "react";
import { FaFilter, FaArrowDown, FaArrowUp, FaCoins } from "react-icons/fa";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import { MdPending } from "react-icons/md";

const TransactionStatus = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const transactions = [
    {
      id: 1,
      date: "Dec 1, 2025",
      time: "14:23",
      type: "Withdrawal",
      method: "Visa *1254",
      amount: "Visa *1254",
      status: "Completed",
      reference: "TXN-2026120114",
    },
    {
      id: 2,
      date: "Dec 1, 2025",
      time: "14:23",
      type: "Withdrawal",
      method: "Visa *1254",
      amount: "Visa *1254",
      status: "Pending",
      reference: "TXN-2026120114",
    },
    {
      id: 3,
      date: "Dec 1, 2025",
      time: "14:23",
      type: "Withdrawal",
      method: "Visa *1254",
      amount: "Visa *1254",
      status: "Completed",
      reference: "TXN-2026120114",
    },
    {
      id: 4,
      date: "Dec 1, 2025",
      time: "14:23",
      type: "Withdrawal",
      method: "Visa *1254",
      amount: "Visa *1254",
      status: "Completed",
      reference: "TXN-2026120114",
    },
    {
      id: 5,
      date: "Dec 1, 2025",
      time: "14:23",
      type: "Deposit",
      method: "Visa *1254",
      amount: "Visa *1254",
      status: "Failed",
      reference: "TXN-2026120114",
    },
    {
      id: 6,
      date: "Dec 1, 2025",
      time: "14:23",
      type: "Withdrawal",
      method: "Visa *1254",
      amount: "Visa *1254",
      status: "Completed",
      reference: "TXN-2026120114",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <IoCheckmarkCircle className="text-green-500 text-base sm:text-lg" />
        );
      case "Pending":
        return <MdPending className="text-yellow-500 text-base sm:text-lg" />;
      case "Failed":
        return <IoCloseCircle className="text-red-500 text-base sm:text-lg" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-500";
      case "Pending":
        return "text-yellow-500";
      case "Failed":
        return "text-red-500";
      default:
        return "text-gray-400";
    }
  };

  const getTypeIcon = (type: string) => {
    if (type === "Withdrawal") {
      return <FaArrowUp className="text-green-500 text-sm" />;
    }
    return <FaArrowDown className="text-green-500 text-sm" />;
  };

  return (
    <div className="min-h-screen text-white py-4 ">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center justify-center flex-shrink-0">
              <Image
                src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Trans.png"
                height={1000}
                width={1000}
                alt=""
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">
                Transaction Status
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Your recent deposits and withdrawals
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-700 text-xs rounded-lg hover:bg-[#1a3244] transition-colors self-end sm:self-auto">
            <FaFilter className="text-gray-400" />
            <span className="text-gray-300">Filter</span>
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-[#0d1f2d] rounded-xl text-xs border border-gray-800 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 px-6 py-4 bg-[#0a1929] border-b border-gray-800">
            <div className="text-gray-400 text-sm font-medium">Date</div>
            <div className="text-gray-400 text-sm font-medium">Type</div>
            <div className="text-gray-400 text-sm font-medium">Method</div>
            <div className="text-gray-400 text-sm font-medium">Amount</div>
            <div className="text-gray-400 text-sm font-medium">Status</div>
            <div className="text-gray-400 text-sm font-medium">Reference</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-800">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="grid grid-cols-6 gap-4 px-6 py-4 hover:bg-[#132534] transition-colors"
              >
                <div className="flex flex-col">
                  <span className="text-white text-sm">{transaction.date}</span>
                  <span className="text-gray-500 text-xs">
                    {transaction.time}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {getTypeIcon(transaction.type)}
                  <span className="text-white text-sm">{transaction.type}</span>
                </div>

                <div className="text-gray-300 text-sm">
                  {transaction.method}
                </div>
                <div className="text-white text-sm">{transaction.amount}</div>

                <div className="flex items-center gap-2">
                  {getStatusIcon(transaction.status)}
                  <span
                    className={`text-sm ${getStatusColor(transaction.status)}`}
                  >
                    {transaction.status}
                  </span>
                </div>

                <div className="text-gray-400 text-sm">
                  {transaction.reference}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-3">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-[#0d1f2d] rounded-xl border border-gray-800 p-4 space-y-3"
            >
              {/* Top Row: Date & Status */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-white text-sm font-medium">
                    {transaction.date}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {transaction.time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(transaction.status)}
                  <span
                    className={`text-xs font-medium ${getStatusColor(
                      transaction.status
                    )}`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-800"></div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                {/* Type */}
                <div>
                  <div className="text-gray-400 mb-1">Type</div>
                  <div className="flex items-center gap-2">
                    {getTypeIcon(transaction.type)}
                    <span className="text-white">{transaction.type}</span>
                  </div>
                </div>

                {/* Method */}
                <div>
                  <div className="text-gray-400 mb-1">Method</div>
                  <div className="text-gray-300">{transaction.method}</div>
                </div>

                {/* Amount */}
                <div>
                  <div className="text-gray-400 mb-1">Amount</div>
                  <div className="text-white">{transaction.amount}</div>
                </div>

                {/* Reference */}
                <div>
                  <div className="text-gray-400 mb-1">Reference</div>
                  <div className="text-gray-400 truncate">
                    {transaction.reference}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mt-6 flex-wrap">
          <button className="w-8 h-8 flex items-center justify-center rounded bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#132534] text-gray-400 text-sm hover:bg-[#1a3244] transition-colors">
            2
          </button>
          <span className="text-gray-500 px-1 sm:px-2 text-sm">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#132534] text-gray-400 text-sm hover:bg-[#1a3244] transition-colors">
            9
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#132534] text-gray-400 text-sm hover:bg-[#1a3244] transition-colors">
            10
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-[#132534] text-gray-400 text-sm hover:bg-[#1a3244] transition-colors">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionStatus;
