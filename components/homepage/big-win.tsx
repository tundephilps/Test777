"use client";

import Image, { StaticImageData } from "next/image";
import { FaTrophy } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface WinCard {
  id: number;
  player: string;
  amount: number;
  image: string;
}

const bigWins: WinCard[] = [
  {
    id: 1,
    player: "Karla Teresa",
    amount: 17766,
    image:
      "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Win1.png",
  },
  {
    id: 2,
    player: "Karla Teresa",
    amount: 14379,
    image:
      "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Win2.png",
  },
  {
    id: 3,
    player: "Karla Teresa",
    amount: 5802,
    image:
      "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Win3.png",
  },
  {
    id: 4,
    player: "Karla Teresa",
    amount: 12000,
    image:
      "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Win4.png",
  },
  {
    id: 5,
    player: "Karla Teresa",
    amount: 17766,
    image:
      "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Win1.png",
  },
  {
    id: 6,
    player: "Karla Teresa",
    amount: 14379,
    image:
      "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Win2.png",
  },
];

export default function BigWins() {
  const t = useTranslations("HomePage");

  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array multiple times for seamless infinite loop
  const duplicatedWins = [...bigWins, ...bigWins, ...bigWins];

  // Auto-scroll effect with infinite loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const cardWidth = 296; // 280px + 16px gap
        const totalCards = bigWins.length;
        const oneSetWidth = cardWidth * totalCards;

        // If we've scrolled past one full set, instantly reset to the beginning
        if (scrollLeft >= oneSetWidth) {
          sliderRef.current.scrollLeft = 0;
        } else {
          // Continue scrolling smoothly
          sliderRef.current.scrollLeft += 1;
        }
      }
    }, 20); // Adjust speed by changing this value

    return () => clearInterval(interval);
  }, [isPaused]);

  // Slide left
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  // Slide right
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pt-8 w-full" style={{ fontFamily: "var(--font-bounded)" }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-white text-lg font-semibold">
          <FaTrophy className="text-yellow-400" />
          <span> {t("class1")}</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2"></div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
        style={{ scrollBehavior: "auto" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedWins.map((win, index) => (
          <div
            key={`${win.id}-${index}`}
            className="flex-shrink-0 w-[280px] rounded-xl overflow-hidden relative bg-gradient-to-b from-[#2a1a1f] via-[#1a1520] to-[#0f1419] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/50"
          >
            {/* Top red accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 z-10" />

            <div className="p-3 flex items-center gap-3">
              {/* Image */}
              <div className="w-28 h-28 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={win.image}
                  alt={win.player}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">
                  {win.player}
                </p>
                <p className="text-red-500 text-lg font-bold whitespace-nowrap">
                  ${win.amount.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
