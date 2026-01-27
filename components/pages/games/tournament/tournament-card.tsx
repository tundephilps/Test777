"use client";

import { Tournament } from "@/actions/games/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight, BiTrophy } from "react-icons/bi";
import { calculateTimeLeft, formatDate, TimeLeft } from "./utils";

export const TournamentCard = ({ tournament }: { tournament: Tournament }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(tournament.end_date),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(tournament.end_date));
    }, 1000);

    return () => clearInterval(timer);
  }, [tournament.end_date]);

  // Format currency roughly to match example "10M", "1.66M" if needed,
  // or just display the raw string/number formatted nicely.
  const formatPrizePool = (pool: string) => {
    const num = parseFloat(pool);
    if (isNaN(num)) return pool;
    if (num >= 1000000)
      return `$${(num / 1000000).toFixed(2).replace(/\.?0+$/, "")}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(0)}K`;
    return `$${num}`;
  };

  return (
    <div className="mt-12 first:mt-0">
      <h1 className="text-3xl font-black uppercase mb-8 tracking-wider text-white flex items-center gap-3">
        <BiTrophy className="text-[#FFD700] w-8 h-8" />
        {tournament.title}
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 bg-[#380e0e] rounded-3xl p-2 border border-[#ce1126]/30 shadow-2xl overflow-hidden">
        {/* Left Main Section */}
        <div className="flex-1 flex flex-col gap-0 rounded-2xl overflow-hidden bg-[#1c0707] border border-[#ce1126]/20">
          {/* Banner Image Background */}
          <div className="relative h-[265px] md:h-[370px] w-full bg-[#1c0707]">
            <Image
              src={tournament.image}
              alt={tournament.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Participating Games Section */}
          <div className="px-4 py-3 bg-[#1c0707] relative">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-bold text-sm uppercase tracking-wide">
                Participating Games
              </h3>
              <div className="flex gap-2">
                <button className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors">
                  <BiChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors">
                  <BiChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                {tournament.games.map((game) => (
                  <Link
                    href={`/play-game/${game?.slug}`}
                    key={game.id}
                    className="shrink-0 w-[100px] group/game cursor-pointer"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden border-2 border-transparent group-hover/game:border-[#FFD700] transition-all relative shadow-lg bg-black/40">
                      <Image
                        src={game.thumbnail}
                        alt={game.game_name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-xs text-center mt-2 text-gray-400 font-medium truncate">
                      {game.game_name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[320px] bg-[#380e0e] rounded-3xl p-6 flex flex-col text-white relative overflow-hidden shadow-lg border border-[#ce1126]/30">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(255,255,255,0.2) 2px, transparent 2px)",
              backgroundSize: "20px 20px",
            }}
          ></div>

          <div className="relative z-10 flex flex-col h-full justify-between gap-4">
            {/* Prize Pool Header */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 mb-2 bg-transparent border-2 border-[#ce1126] rounded-full flex items-center justify-center">
                <BiTrophy className="w-6 h-6 text-[#FFD700]" />
              </div>
              <span className="text-white font-bold uppercase tracking-wider text-xs mb-1">
                PRIZE POOL
              </span>
              <span className="text-4xl font-black text-[#FFD700] drop-shadow-md">
                {formatPrizePool(tournament.prize_pool)}
              </span>
            </div>

            <div className="h-px bg-white/10 w-full my-2"></div>

            {/* Stats Grid */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-white/80">Players</span>
                <span className="text-lg font-bold">∞</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">Start date</span>
                  <span className="font-bold text-right text-white">
                    {formatDate(tournament.start_date)}
                    <br />
                    <span className="text-white/70 text-xs">
                      {new Date(tournament.start_date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/80">End date</span>
                  <span className="font-bold text-right text-white">
                    {formatDate(tournament.end_date)}
                    <br />
                    <span className="text-white/70 text-xs">
                      {new Date(tournament.end_date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Countdown Box */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              <div className="bg-[#1c0707] rounded-lg p-2 border border-[#ce1126]/30 shadow-inner flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-white leading-none">
                  {timeLeft.days}
                </span>
                <span className="text-[#FFD700] font-bold text-[8px] uppercase tracking-wider mt-1">
                  Days
                </span>
              </div>
              <div className="bg-[#1c0707] rounded-lg p-2 border border-[#ce1126]/30 shadow-inner flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-white leading-none">
                  {timeLeft.hours}
                </span>
                <span className="text-[#FFD700] font-bold text-[8px] uppercase tracking-wider mt-1">
                  Hours
                </span>
              </div>
              <div className="bg-[#1c0707] rounded-lg p-2 border border-[#ce1126]/30 shadow-inner flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-white leading-none">
                  {timeLeft.minutes}
                </span>
                <span className="text-[#FFD700] font-bold text-[8px] uppercase tracking-wider mt-1">
                  Min
                </span>
              </div>
              <div className="bg-[#1c0707] rounded-lg p-2 border border-[#ce1126]/30 shadow-inner flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-white leading-none">
                  {timeLeft.seconds}
                </span>
                <span className="text-[#FFD700] font-bold text-[8px] uppercase tracking-wider mt-1">
                  Sec
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
