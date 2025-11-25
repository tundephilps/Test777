import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";

const ParticipatingGames = () => {
  const games = [
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game1.png",
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game2.png",
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game3.png",
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game4.png",
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game5.png",
  ];

  return (
    <div className="mt-6">
      {/* Bottom Section - Welcome Bonus */}
      <div className="flex items-center justify-between  py-4">
        {/* Left Side - Welcome Bonus */}
        <div className="flex items-center gap-2 text-white">
          <GiGamepad className="w-5 h-5" />
          <span className="font-semibold">Participating Games</span>
        </div>

        {/* Right Side - View All with Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-300 hover:text-white transition-colors border-t hover:bg-white/10 cursor-pointer border-gray-800 bg-[#071a26] p-2 rounded-md">
            View All
          </button>
          <div className="flex gap-2">
            <button className="border-t hover:bg-white/10 cursor-pointer border-gray-800 bg-[#071a26]  p-2 rounded transition-all">
              <IoChevronBack className="w-4 h-4 text-gray-400" />
            </button>
            <button className="bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-60 cursor-pointer p-2 rounded transition-all">
              <IoChevronForward className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-2">
        {games.map((game, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            {/* Game Image */}
            <Image
              src={game}
              width={1000}
              height={300}
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
    </div>
  );
};

export default ParticipatingGames;
