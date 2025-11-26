"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import VIP from "../../public/VIP.png";

export default function VipCashback() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const cashbacks = [
    {
      id: 1,
      totalDeposit: "30.00 CAD",
      cashbackAmount: "0.90 CAD (0.90 CAD)",
      status: "Claimed",
      expireOn: "08-09-2024 11:59:59 PM",
    },
    {
      id: 2,
      totalDeposit: "30.00 CAD",
      cashbackAmount: "0.90 CAD (0.90 CAD)",
      status: "Pending",
      expireOn: "08-09-2024 11:59:59 PM",
    },
    {
      id: 3,
      totalDeposit: "30.00 CAD",
      cashbackAmount: "0.90 CAD (0.90 CAD)",
      status: "Claimed",
      expireOn: "08-09-2024 11:59:59 PM",
    },
    {
      id: 4,
      totalDeposit: "30.00 CAD",
      cashbackAmount: "0.90 CAD (0.90 CAD)",
      status: "Pending",
      expireOn: "08-09-2024 11:59:59 PM",
    },
    {
      id: 5,
      totalDeposit: "30.00 CAD",
      cashbackAmount: "0.90 CAD (0.90 CAD)",
      status: "Claimed",
      expireOn: "08-09-2024 11:59:59 PM",
    },
    {
      id: 6,
      totalDeposit: "30.00 CAD",
      cashbackAmount: "0.90 CAD (0.90 CAD)",
      status: "Cancelled",
      expireOn: "08-09-2024 11:59:59 PM",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "claimed":
        return "text-green-500";
      case "pending":
        return "text-yellow-500";
      case "cancelled":
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
    <div className="min-h-screen">
      <div className="mx-auto">
        {/* Desktop Table View */}
        <div className="hidden md:block bg-slate-900/30 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-800/50">
          {/* Table Header */}
          <div className="grid grid-cols-5  gap-4 px-6 py-4 bg-slate-800/30 border-b border-slate-700/50">
            <div className="text-slate-400 text-sm font-medium">No</div>
            <div className="text-slate-400 text-sm font-medium">
              Total Deposit
            </div>
            <div className="text-slate-400 text-sm font-medium">
              Cashback Amount
            </div>
            <div className="text-slate-400 text-sm font-medium">Status</div>
            <div className="text-slate-400 text-sm font-medium">Expire on</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-800/50">
            {cashbacks.map((cashback, index) => (
              <div
                key={cashback.id}
                className={`grid grid-cols-5 gap-4 px-6 py-4 hover:bg-slate-800/20 transition-colors ${
                  index % 2 === 0 ? "bg-slate-900/20" : ""
                }`}
              >
                <div className="text-slate-300 text-sm">{cashback.id}</div>
                <div className="text-slate-300 text-sm">
                  {cashback.totalDeposit}
                </div>
                <div className="text-slate-300 text-sm">
                  {cashback.cashbackAmount}
                </div>
                <div
                  className={`text-sm font-medium ${getStatusColor(
                    cashback.status
                  )}`}
                >
                  {cashback.status}
                </div>
                <div className="text-slate-300 text-sm">
                  {cashback.expireOn}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {cashbacks.map((cashback) => (
            <div
              key={cashback.id}
              className="bg-slate-900/30 backdrop-blur-sm rounded-lg border border-slate-800/50 p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-xs font-medium">
                  #{cashback.id}
                </span>
                <span
                  className={`text-xs font-medium ${getStatusColor(
                    cashback.status
                  )}`}
                >
                  {cashback.status}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">Total Deposit:</span>
                  <span className="text-slate-300 text-xs">
                    {cashback.totalDeposit}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">
                    Cashback Amount:
                  </span>
                  <span className="text-slate-300 text-xs">
                    {cashback.cashbackAmount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">Expire on:</span>
                  <span className="text-slate-300 text-xs">
                    {cashback.expireOn}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {/* <div className="flex items-center justify-center gap-2 mt-6">
       
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

     
          {renderPageNumbers()}

        
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
        </div> */}
      </div>

      <Image
        src={VIP}
        width={2000}
        height={2000}
        className="h-auto w-full mt-12"
        alt=""
      />
    </div>
  );
}
