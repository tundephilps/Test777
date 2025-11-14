import Image from "next/image";
import React from "react";
import { BsGiftFill } from "react-icons/bs";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Game1 from "../../public/Game1.png";
import Game2 from "../../public/Game2.png";
import Game3 from "../../public/Game3.png";
import Game4 from "../../public/Game4.png";
import Game5 from "../../public/Game5.png";
import { FaPlay } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";

const LiveCasinoGames = () => {
  const games = [Game1, Game2, Game3, Game4, Game5];
  return (
    <div className="mt-6 w-full">
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-2">
        {games.map((game, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            {/* Game Image */}
            <Image
              src={game}
              alt={`Game ${index + 1}`}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaPlay className="text-white text-3xl" />
            </div>
          </div>
        ))}
      </div>
      <span className="text-[16px] bg-[#081a26] items-center justify-center cursor-pointer rounded-md flex mt-6 hover:bg-slate-800 mx-auto text-base font-bold text-[#f80507] px-8 py-3  text-center">
        View All
      </span>
    </div>
  );
};

export default LiveCasinoGames;
