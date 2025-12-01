import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const CasinoGames = () => {
  const games = [
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game1.png",
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game2.png",
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game3.png",
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game4.png",
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game5.png",
  ];
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
              width={1000}
              height={400}
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

export default CasinoGames;
