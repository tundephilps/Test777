"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const JackpotCount = () => {
  const initialAmount = 1251047;
  const [jackpotAmount, setJackpotAmount] = useState(initialAmount);
  const [isClient, setIsClient] = useState(false); // New state

  useEffect(() => {
    setIsClient(true); // Set after mount

    const storedAmount = localStorage.getItem("jackpotAmount");
    if (storedAmount) {
      setJackpotAmount(parseFloat(storedAmount));
    }

    const interval = setInterval(() => {
      const incrementAmount = Math.random() * (0.5 - 0.1) + 0.1;
      setJackpotAmount((prev) => {
        const newAmount = prev + incrementAmount;
        localStorage.setItem("jackpotAmount", newAmount.toFixed(2));
        return newAmount;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleReset = () => {
    localStorage.setItem("jackpotAmount", initialAmount.toFixed(2));
    setJackpotAmount(initialAmount);
  };

  if (!isClient) {
    // Match server render exactly
    const formattedAmount = initialAmount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    const [staticPart, dynamicPart] = formattedAmount.split(".");
    return (
      <div className="flex flex-col items-center justify-center -mt-2 laptop:-mt-10">
        <div className="bg-primary/20 backdrop-blur-xs border border-white/10 px-6 py-1 rounded-full mb-3">
          <span className="text-primary font-bold tracking-widest text-xs uppercase">
            Current Mega Jackpot
          </span>
        </div>
        <h2 className="text-4xl laptop:text-6xl text-white font-black tracking-tight">
          {staticPart}.{dynamicPart}
        </h2>
      </div>
    );
  }

  const formattedAmount = jackpotAmount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const [staticPart, dynamicPart] = formattedAmount.split(".");

  return (
    <div className="flex flex-col items-center justify-center -mt-2 laptop:-mt-10">
      <div className="bg-primary/20 backdrop-blur-xs border border-white/10 px-6 py-1 rounded-full mb-3">
        <span className="text-primary font-bold tracking-widest text-xs uppercase">
          Current Mega Jackpot
        </span>
      </div>
      <h2 className="text-4xl laptop:text-6xl text-white font-black tracking-tight">
        {staticPart}.
        <motion.span
          key={dynamicPart}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {dynamicPart}
        </motion.span>
      </h2>
      <button
        onClick={handleReset}
        className="mt-4 text-[10px] text-white/20 hover:text-white/40 transition hidden"
      >
        Reset Counter
      </button>
    </div>
  );
};
