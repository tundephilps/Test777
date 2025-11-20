"use client";
import React from "react";

const ProgressLevel = () => {
  const level = 1;
  const points = 836.88;
  const progress = 48; // percentage

  return (
    <div className="w-full  mx-auto  py-6 ">
      {/* VIP Level Text */}
      <div className="text-center mb-4">
        <p className="text-slate-300 text-sm">
          VIP Level:{" "}
          <span className="font-semibold text-white">Level {level}</span>
          <span className="text-slate-400"> (Points: {points})</span>
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="relative">
        {/* Background Bar */}
        <div className="w-full h-10 bg-slate-700/50 rounded-full overflow-hidden relative">
          {/* Red Striped Progress Bar */}
          <div
            className="h-full bg-gradient-to-r from-red-600 to-red-500 relative overflow-hidden transition-all duration-500"
            style={{ width: `${progress}%` }}
          >
            {/* Diagonal Stripes Pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(0, 0, 0, 0.3) 10px,
                  rgba(0, 0, 0, 0.3) 20px
                )`,
              }}
            />

            {/* Shine Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{
                animation: "shine 2s infinite",
              }}
            />
          </div>
        </div>

        {/* Percentage Circle Badge */}
        <div
          className="absolute top-1/2 -translate-y-1/2 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg border-4 border-slate-800 transition-all duration-500"
          style={{ left: `calc(${progress}% - 28px)` }}
        >
          <span className="text-slate-900 font-bold text-sm">{progress}%</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ProgressLevel;
