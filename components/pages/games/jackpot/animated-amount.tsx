"use client";
import { useEffect, useState } from "react";

const AnimatedAmount = () => {
  const [value, setValue] = useState(1251444.51);
  const [displayDecimal, setDisplayDecimal] = useState("51");
  const [nextDecimal, setNextDecimal] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newValue = +(value + 0.01).toFixed(2);
      setNextDecimal(newValue.toFixed(2).split(".")[1]);
      setValue(newValue);
    }, 1000);

    return () => clearInterval(interval);
  }, [value]);

  const intPart = Math.floor(value).toLocaleString();

  return (
    <div className="flex  text-white text-5xl absolute inset-0 items-end top-6 pb-12 bottom-0 justify-center font-bold">
      <span>{intPart}</span>
      <span className="mx-1">.</span>

      <div className="relative h-[1em] w-[2ch] overflow-hidden">
        {/* Current decimal (slides up and disappears) */}
        {nextDecimal && (
          <span
            className="absolute left-0 top-0 animate-slide-up-fade"
            onAnimationEnd={() => {
              setDisplayDecimal(nextDecimal);
              setNextDecimal(null);
            }}
          >
            {displayDecimal}
          </span>
        )}

        {/* Incoming decimal */}
        <span
          className={`absolute left-0 top-0 ${
            nextDecimal ? "animate-slide-in-fade" : ""
          }`}
        >
          {nextDecimal ?? displayDecimal}
        </span>
      </div>
    </div>
  );
};

export default AnimatedAmount;
