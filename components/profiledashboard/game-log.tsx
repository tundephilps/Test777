"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function GameLog() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const games = [
    {
      no: "97440296",
      gameName: "Towering Fortun...",
      type: "BET",
      betAmount: "0.00",
      winAmount: "0.00",
      balance: "48.90",
      date: "08-09-202...",
    },
    {
      no: "97440296",
      gameName: "Towering Fortun...",
      type: "BET",
      betAmount: "0.00",
      winAmount: "0.00",
      balance: "48.90",
      date: "08-09-202...",
    },
    {
      no: "97440296",
      gameName: "Towering Fortun...",
      type: "BET",
      betAmount: "0.00",
      winAmount: "0.00",
      balance: "48.90",
      date: "08-09-202...",
    },
    {
      no: "97440296",
      gameName: "Towering Fortun...",
      type: "BET",
      betAmount: "0.00",
      winAmount: "0.00",
      balance: "48.90",
      date: "08-09-202...",
    },
    {
      no: "97440296",
      gameName: "Towering Fortun...",
      type: "BET",
      betAmount: "0.00",
      winAmount: "0.00",
      balance: "48.90",
      date: "08-09-202...",
    },
    {
      no: "97440296",
      gameName: "Towering Fortun...",
      type: "BET",
      betAmount: "0.00",
      winAmount: "0.00",
      balance: "48.90",
      date: "08-09-202...",
    },
    {
      no: "97440296",
      gameName: "Towering Fortun...",
      type: "BET",
      betAmount: "0.00",
      winAmount: "0.00",
      balance: "48.90",
      date: "08-09-202...",
    },
  ];

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
          <div className="grid grid-cols-7 gap-4 px-6 py-4 bg-slate-800/30 border-b border-slate-700/50">
            <div className="text-slate-400 text-sm font-medium">No</div>
            <div className="text-slate-400 text-sm font-medium">Game Name</div>
            <div className="text-slate-400 text-sm font-medium">Type</div>
            <div className="text-slate-400 text-sm font-medium">Bet Amount</div>
            <div className="text-slate-400 text-sm font-medium">Win Amount</div>
            <div className="text-slate-400 text-sm font-medium">Balance</div>
            <div className="text-slate-400 text-sm font-medium">Date</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-800/50">
            {games.map((game, index) => (
              <div
                key={index}
                className={`grid grid-cols-7 gap-4 px-6 py-4 hover:bg-slate-800/20 transition-colors ${
                  index % 2 === 0 ? "bg-slate-900/20" : ""
                }`}
              >
                <div className="text-slate-300 text-sm">{game.no}</div>
                <div className="text-slate-300 text-sm">{game.gameName}</div>
                <div className="text-slate-300 text-sm">{game.type}</div>
                <div className="text-slate-300 text-sm">{game.betAmount}</div>
                <div className="text-slate-300 text-sm">{game.winAmount}</div>
                <div className="text-slate-300 text-sm">{game.balance}</div>
                <div className="text-slate-300 text-sm">{game.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-slate-900/30 backdrop-blur-sm rounded-lg border border-slate-800/50 p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-xs font-medium">
                  #{game.no}
                </span>
                <span className="text-slate-300 text-xs">{game.type}</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">Game Name:</span>
                  <span className="text-slate-300 text-xs">
                    {game.gameName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">Bet Amount:</span>
                  <span className="text-slate-300 text-xs">
                    {game.betAmount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">Win Amount:</span>
                  <span className="text-slate-300 text-xs">
                    {game.winAmount}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">Balance:</span>
                  <span className="text-slate-300 text-xs">{game.balance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-xs">Date:</span>
                  <span className="text-slate-300 text-xs">{game.date}</span>
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
