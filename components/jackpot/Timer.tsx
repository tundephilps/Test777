"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set initial countdown time (12 hours from now)
    const endTime = new Date().getTime() + 12 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  const renderDigit = (value: string) => {
    return (
      <div className="relative">
        <div className="w-6 h-18 sm:w-16 sm:h-20 bg-gradient-to-b from-[#2a0000] to-[#1a0000] rounded-lg border-2 border-[#ff0000]/30 shadow-lg shadow-red-900/50 flex items-center justify-center relative overflow-hidden">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-[1px] bg-[#ff0000] absolute top-1/2" />
            <div className="w-[1px] h-full bg-[#ff0000] absolute left-1/2" />
          </div>

          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff0000]/5 to-transparent" />

          {/* Number */}
          <span className="text-xl sm:text-2xl font-bold text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
            {value}
          </span>

          {/* Top reflection */}
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent rounded-t-lg" />
        </div>
      </div>
    );
  };

  const hoursStr = formatNumber(timeLeft.hours);
  const minutesStr = formatNumber(timeLeft.minutes);
  const secondsStr = formatNumber(timeLeft.seconds);

  return (
    <div className="flex items-center justify-center p-2 bg-gradient-to-br from-[#1a0000] via-[#0a0000] to-[#1a0000] rounded-xl">
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Hours */}
        <div className="flex gap-2">
          {renderDigit(hoursStr[0])}
          {renderDigit(hoursStr[1])}
        </div>

        {/* Separator */}
        <div className="flex flex-col gap-2 pb-1">
          <div className="w-2 h-2 bg-[#ff0000] rounded-full shadow-lg shadow-red-500/50" />
          <div className="w-2 h-2 bg-[#ff0000] rounded-full shadow-lg shadow-red-500/50" />
        </div>

        {/* Minutes */}
        <div className="flex gap-2">
          {renderDigit(minutesStr[0])}
          {renderDigit(minutesStr[1])}
        </div>

        {/* Separator */}
        <div className="flex flex-col gap-2 pb-1">
          <div className="w-2 h-2 bg-[#ff0000] rounded-full shadow-lg shadow-red-500/50" />
          <div className="w-2 h-2 bg-[#ff0000] rounded-full shadow-lg shadow-red-500/50" />
        </div>

        {/* Seconds */}
        <div className="flex gap-2">
          {renderDigit(secondsStr[0])}
          {renderDigit(secondsStr[1])}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
