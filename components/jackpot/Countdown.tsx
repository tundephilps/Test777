"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetTime: string; // e.g. "2025-12-31T23:59:59"
}

const Countdown = ({ targetTime }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetTime) - +new Date();

    if (difference <= 0) {
      return { hours: "00", minutes: "00", seconds: "00" };
    }

    const hours = String(
      Math.floor((difference / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
      2,
      "0"
    );

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {/* Hours */}
      {timeLeft.hours.split("").map((digit, i) => (
        <span
          key={`h-${i}`}
          className="bg-[#660000] border border-[#f80507] text-white text-xl font-bold rounded-xl px-3 py-2 inline-block"
        >
          {digit}
        </span>
      ))}

      <span className="text-white text-xl font-bold">:</span>

      {/* Minutes */}
      {timeLeft.minutes.split("").map((digit, i) => (
        <span
          key={`m-${i}`}
          className="bg-[#660000] border border-[#f80507] text-white text-xl font-bold rounded-xl px-3 py-2 inline-block"
        >
          {digit}
        </span>
      ))}

      <span className="text-white text-xl font-bold">:</span>

      {/* Seconds */}
      {timeLeft.seconds.split("").map((digit, i) => (
        <span
          key={`s-${i}`}
          className="bg-[#660000] border border-[#f80507] text-white text-xl font-bold rounded-xl px-3 py-2 inline-block"
        >
          {digit}
        </span>
      ))}
    </div>
  );
};

export default Countdown;
