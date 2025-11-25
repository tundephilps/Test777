"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function BonusTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const wagers = [
    {
      id: 1,
      type: "Aka poy Test",
      bonus: "0.00 CAD",
      wagerRequired: "67.00 CAD / 0.00 CAD",
      status: "Wagering",
      result: "cancel",
      expireOn: "09-44-35AM",
    },
    {
      id: 2,
      type: "Aka poy Test",
      bonus: "0.00 CAD",
      wagerRequired: "67.00 CAD / 0.00 CAD",
      status: "Wagering",
      result: "cancel",
      expireOn: "09-44-35AM",
    },
    {
      id: 3,
      type: "Aka poy Test",
      bonus: "0.00 CAD",
      wagerRequired: "67.00 CAD / 0.00 CAD",
      status: "Wagering",
      result: "cancel",
      expireOn: "09-44-35AM",
    },
    {
      id: 4,
      type: "Aka poy Test",
      bonus: "0.00 CAD",
      wagerRequired: "67.00 CAD / 0.00 CAD",
      status: "Wagering",
      result: "cancel",
      expireOn: "09-44-35AM",
    },
    {
      id: 5,
      type: "Aka poy Test",
      bonus: "0.00 CAD",
      wagerRequired: "67.00 CAD / 0.00 CAD",
      status: "Wagering",
      result: "cancel",
      expireOn: "09-44-35AM",
    },
    {
      id: 6,
      type: "Aka poy Test",
      bonus: "0.00 CAD",
      wagerRequired: "67.00 CAD / 0.00 CAD",
      status: "Wagering",
      result: "cancel",
      expireOn: "09-44-35AM",
    },
    {
      id: 7,
      type: "Aka poy Test",
      bonus: "0.00 CAD",
      wagerRequired: "67.00 CAD / 0.00 CAD",
      status: "Wagering",
      result: "cancel",
      expireOn: "09-44-35AM",
    },
    {
      id: 8,
      type: "Aka poy Test",
      bonus: "0.00 CAD",
      wagerRequired: "67.00 CAD / 0.00 CAD",
      status: "Wagering",
      result: "cancel",
      expireOn: "09-44-35AM",
    },
    {
      id: 9,
      type: "Aka poy Test",
      bonus: "0.00 CAD",
      wagerRequired: "67.00 CAD / 0.00 CAD",
      status: "Wagering",
      result: "cancel",
      expireOn: "09-44-35AM",
    },
    {
      id: 10,
      type: "Aka poy Test",
      bonus: "0.00 CAD",
      wagerRequired: "67.00 CAD / 0.00 CAD",
      status: "Wagering",
      result: "cancel",
      expireOn: "09-44-35AM",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "wagering":
        return "text-yellow-500";
      case "completed":
        return "text-green-500";
      case "expired":
        return "text-red-500";
      default:
        return "text-slate-400";
    }
  };

  const getResultColor = (result: string) => {
    switch (result.toLowerCase()) {
      case "cancel":
        return "text-red-500";
      case "win":
        return "text-green-500";
      case "pending":
        return "text-yellow-500";
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
    <div className="min-h-screen" style={{ fontFamily: "var(--font-bounded)" }}>
      <div className="mx-auto">
        {/* Desktop Table View */}
        <div className="hidden md:block bg-slate-900/30 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-800/50">
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-4 px-6 py-4 bg-slate-800/30 border-b border-slate-700/50">
            <div className="text-slate-400 text-sm font-medium">No</div>
            <div className="text-slate-400 text-sm font-medium">Title</div>
            <div className="text-slate-400 text-sm font-medium">Bonus</div>
            <div className="text-slate-400 text-sm font-medium">
              Wager Required
            </div>
            <div className="text-slate-400 text-sm font-medium">Status</div>
            <div className="text-slate-400 text-sm font-medium"></div>
            <div className="text-slate-400 text-sm font-medium">Expire on</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-800/50">
            {wagers.map((wager, index) => (
              <div
                key={wager.id}
                className={`grid grid-cols-7 gap-4 px-6 py-4 hover:bg-slate-800/20 transition-colors ${
                  index % 2 === 0 ? "bg-slate-900/20" : ""
                }`}
              >
                <div className="text-slate-300 text-sm">{wager.id}</div>
                <div className="text-slate-300 text-sm">{wager.type}</div>
                <div className="text-slate-300 text-sm">{wager.bonus}</div>
                <div className="text-slate-300 text-xs">
                  {wager.wagerRequired}
                </div>
                <div
                  className={`text-sm font-medium ${getStatusColor(
                    wager.status
                  )}`}
                >
                  {wager.status}
                </div>
                <div
                  className={`text-sm font-medium ${getResultColor(
                    wager.result
                  )}`}
                >
                  {wager.result}
                </div>
                <div className="text-slate-300 text-sm">{wager.expireOn}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {wagers.map((wager) => (
            <div
              key={wager.id}
              className="bg-slate-900/30 backdrop-blur-sm rounded-lg border border-slate-800/50 p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-xs font-medium">
                  #{wager.id}
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-medium ${getStatusColor(
                      wager.status
                    )}`}
                  >
                    {wager.status}
                  </span>
                  <span
                    className={`text-xs font-medium ${getResultColor(
                      wager.result
                    )}`}
                  >
                    {wager.result}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">Title:</span>
                  <span className="text-slate-300 text-xs">{wager.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">Bonus:</span>
                  <span className="text-slate-300 text-xs">{wager.bonus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">
                    Wager Required:
                  </span>
                  <span className="text-slate-300 text-xs">
                    {wager.wagerRequired}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">Expire on:</span>
                  <span className="text-slate-300 text-xs">
                    {wager.expireOn}
                  </span>
                </div>
              </div>
            </div>
          ))}
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
}
