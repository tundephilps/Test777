"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const History = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const transactions = [
    {
      id: 1,
      amount: "5.00 CAD",
      provider: "Interac",
      transactionId: "CAO74127JO",
      createdAt: "11.11.2025 06:57:36 AM",
      status: "Waiting",
    },
    {
      id: 2,
      amount: "5.00 CAD",
      provider: "Interac",
      transactionId: "CAO74127JO",
      createdAt: "11.11.2025 06:57:36 AM",
      status: "Paid",
    },
    {
      id: 3,
      amount: "5.00 CAD",
      provider: "Interac",
      transactionId: "CAO74127JO",
      createdAt: "11.11.2025 06:57:36 AM",
      status: "Paid",
    },
    {
      id: 4,
      amount: "5.00 CAD",
      provider: "Interac",
      transactionId: "CAO74127JO",
      createdAt: "11.11.2025 06:57:36 AM",
      status: "Rejected",
    },
    {
      id: 5,
      amount: "5.00 CAD",
      provider: "Interac",
      transactionId: "CAO74127JO",
      createdAt: "11.11.2025 06:57:36 AM",
      status: "Paid",
    },
    {
      id: 6,
      amount: "5.00 CAD",
      provider: "Interac",
      transactionId: "CAO74127JO",
      createdAt: "11.11.2025 06:57:36 AM",
      status: "Paid",
    },
    {
      id: 7,
      amount: "5.00 CAD",
      provider: "Interac",
      transactionId: "CAO74127JO",
      createdAt: "11.11.2025 06:57:36 AM",
      status: "Paid",
    },
    {
      id: 8,
      amount: "5.00 CAD",
      provider: "Interac",
      transactionId: "CAO74127JO",
      createdAt: "11.11.2025 06:57:36 AM",
      status: "Waiting",
    },
    {
      id: 9,
      amount: "5.00 CAD",
      provider: "Interac",
      transactionId: "CAO74127JO",
      createdAt: "11.11.2025 06:57:36 AM",
      status: "Waiting",
    },
    {
      id: 10,
      amount: "5.00 CAD",
      provider: "Interac",
      transactionId: "CAO74127JO",
      createdAt: "11.11.2025 06:57:36 AM",
      status: "Waiting",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "text-green-500";
      case "Waiting":
        return "text-yellow-500";
      case "Rejected":
        return "text-red-500";
      default:
        return "text-slate-400";
    }
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    // First page
    pages.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`w-8 h-8 rounded ${
          currentPage === 1
            ? "bg-red-600 text-white"
            : "bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-white"
        } transition-colors`}
      >
        1
      </button>
    );

    // Ellipsis or page 2
    if (currentPage > 3) {
      pages.push(
        <span key="ellipsis1" className="text-slate-500 px-2">
          ...
        </span>
      );
    } else if (totalPages > 1) {
      pages.push(
        <button
          key={2}
          onClick={() => handlePageChange(2)}
          className={`w-8 h-8 rounded ${
            currentPage === 2
              ? "bg-red-600 text-white"
              : "bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-white"
          } transition-colors`}
        >
          2
        </button>
      );
    }

    // Middle pages
    if (currentPage > 2 && currentPage < totalPages - 1) {
      pages.push(
        <button
          key={currentPage}
          className="w-8 h-8 rounded bg-red-600 text-white"
        >
          {currentPage}
        </button>
      );
    }

    // Ellipsis before last page
    if (currentPage < totalPages - 2) {
      pages.push(
        <span key="ellipsis2" className="text-slate-500 px-2">
          ...
        </span>
      );
    } else if (totalPages > 2 && currentPage !== totalPages - 1) {
      pages.push(
        <button
          key={totalPages - 1}
          onClick={() => handlePageChange(totalPages - 1)}
          className={`w-8 h-8 rounded ${
            currentPage === totalPages - 1
              ? "bg-red-600 text-white"
              : "bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-white"
          } transition-colors`}
        >
          {totalPages - 1}
        </button>
      );
    }

    // Last page
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`w-8 h-8 rounded ${
            currentPage === totalPages
              ? "bg-red-600 text-white"
              : "bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-white"
          } transition-colors`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="min-h-screen bg-[#0a1f2d] rounded-xl mt-8 py-4">
      <div className=" mx-auto">
        {/* Header */}
        <h1 className="text-white text-2xl font-bold text-center mb-8 tracking-wider">
          HISTORY
        </h1>

        {/* Table */}
        <div className="bg-slate-900/30 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-800/50">
          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 px-6 py-4 bg-slate-800/30 border-b border-slate-700/50">
            <div className="text-slate-400 text-sm font-medium">#</div>
            <div className="text-slate-400 text-sm font-medium">Amount</div>
            <div className="text-slate-400 text-sm font-medium">Provider</div>
            <div className="text-slate-400 text-sm font-medium">
              Transaction Id
            </div>
            <div className="text-slate-400 text-sm font-medium">Created at</div>
            <div className="text-slate-400 text-sm font-medium">Status</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-800/50">
            {transactions.map((transaction, index) => (
              <div
                key={transaction.id}
                className={`grid grid-cols-6 gap-4 px-6 py-4 hover:bg-slate-800/20 transition-colors ${
                  index % 2 === 0 ? "bg-slate-900/20" : ""
                }`}
              >
                <div className="text-slate-300 text-sm">{transaction.id}</div>
                <div className="text-slate-300 text-sm">
                  {transaction.amount}
                </div>
                <div className="text-slate-300 text-sm">
                  {transaction.provider}
                </div>
                <div className="text-slate-300 text-sm">
                  {transaction.transactionId}
                </div>
                <div className="text-slate-300 text-sm">
                  {transaction.createdAt}
                </div>
                <div
                  className={`text-sm font-medium ${getStatusColor(
                    transaction.status
                  )}`}
                >
                  {transaction.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`w-8 h-8 rounded flex items-center justify-center ${
              currentPage === 1
                ? "bg-slate-800/30 text-slate-600 cursor-not-allowed"
                : "bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white"
            } transition-colors`}
          >
            <FaChevronLeft size={12} />
          </button>

          {/* Page Numbers */}
          {renderPageNumbers()}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`w-8 h-8 rounded flex items-center justify-center ${
              currentPage === totalPages
                ? "bg-slate-800/30 text-slate-600 cursor-not-allowed"
                : "bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white"
            } transition-colors`}
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
