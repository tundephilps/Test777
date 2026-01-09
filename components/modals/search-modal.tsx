"use client";
import { useState } from "react";
import { IoHeart, IoHeartOutline, IoEllipsisHorizontal } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";
import { IMAGES } from "@/lib/assets";
import Image from "next/image";

const SearchModal = () => {
  const [active, setActive] = useState("games");
  const tabs = ["games", "providers", "favorites"];
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [openCard, setOpenCard] = useState<number | null>(null);

  const games = [
    {
      image: IMAGES.Game1,
      name: "PLINKO 1000",
    },
    {
      image: IMAGES.Game2,

      name: "AZTEC SLOTS",
    },
    {
      image: IMAGES.Game3,
      name: "MEGA FORTUNE",
    },
    {
      image: IMAGES.Game4,
      name: "LUCKY SPINS",
    },
    {
      image: IMAGES.Game5,
      name: "DIAMOND RUSH",
    },
    {
      image: IMAGES.Game1,
      name: "PLINKO 1000",
    },
  ];

  const toggleFavorite = (index: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  return (
    <div className="py-2 rounded-xl w-full mt-6 max-h-[70vh] overflow-y-auto ">
      <div className="flex items-center gap-2">
        {/* Search */}
        <input
          type="text"
          placeholder="Search Games..."
          className="bg-[#0b1f2b] text-gray-300 placeholder-gray-500 px-4 py-2 rounded-lg text-sm w-full focus:outline-none border border-transparent focus:border-red-600 transition"
        />

        {/* Tabs */}
        <div className="flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition ${
                active === tab
                  ? "bg-red-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 mt-6 gap-2 ">
        {games.map((game, index) => {
          const isOpen = openCard === index;

          return (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              {/* Image */}
              <Image
                src={game.image}
                width={1000}
                height={300}
                alt={game.name}
                className="w-full h-52 transition-transform duration-300 group-hover:scale-105"
              />

              {/* DESKTOP hover overlay */}
              <div className="hidden lg:flex absolute  inset-0 flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition">
                <button className="flex items-center cursor-pointer gap-2 bg-gradient-to-b from-[#f80507] to-[#860001] text-white px-8 py-2.5 rounded-full font-semibold mb-2">
                  <FaPlay /> Play
                </button>
                <button className="flex items-center cursor-pointer gap-2 bg-white/20 text-white px-6 py-2.5 rounded-full">
                  <GiGamepad /> Demo
                </button>
              </div>

              {/* DESKTOP favorite */}
              <button
                onClick={() => toggleFavorite(index)}
                className="hidden lg:flex absolute top-2 right-2 p-2 rounded-full bg-black/40"
              >
                {favorites.has(index) ? (
                  <IoHeart className="text-red-500 text-xl" />
                ) : (
                  <IoHeartOutline className="text-white text-xl" />
                )}
              </button>

              {/* MOBILE FAB */}
              <button
                onClick={() => setOpenCard(isOpen ? null : index)}
                className="lg:hidden absolute bottom-2 right-2 bg-black/70 text-white p-2 rounded-full z-10"
              >
                <IoEllipsisHorizontal />
              </button>

              {/* MOBILE ACTIONS */}
              <div
                className={`lg:hidden absolute inset-0 bg-black/70 flex flex-col items-center justify-center
              transition-all duration-300
              ${
                isOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
              >
                {/* Favorite */}
                <button
                  onClick={() => toggleFavorite(index)}
                  className="absolute top-3 right-3 p-2 bg-black/50 rounded-full"
                >
                  {favorites.has(index) ? (
                    <IoHeart className="text-red-500 text-xl" />
                  ) : (
                    <IoHeartOutline className="text-white text-xl" />
                  )}
                </button>

                <button className="flex items-center gap-2 bg-gradient-to-b from-[#f80507] to-[#860001] text-white px-8 py-2.5 rounded-full font-semibold mb-3">
                  <FaPlay /> Play
                </button>

                <button className="flex items-center gap-2 bg-white/20 text-white px-6 py-2.5 rounded-full">
                  <GiGamepad /> Demo
                </button>
              </div>

              {/* Name */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t
from-black/80 to-transparent p-3 transition-all duration-300
${
  isOpen
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
}`}
              >
                <p className="text-white font-semibold text-center text-sm">
                  {game.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchModal;
