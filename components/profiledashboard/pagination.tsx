"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GameLog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

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
  );
};

export default GameLog;
