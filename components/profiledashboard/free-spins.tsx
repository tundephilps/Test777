import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const FreeSpins = () => {
  const games = [
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game1.png",
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game2.png",
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game3.png",
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game4.png",
    "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Game5.png",
  ];
  return (
    <div>
      {/* Promo Code Section */}
      <div className="mb-8">
        <h2 className="text-white text-center mb-4 text-lg">
          Do you have Promo Code?
        </h2>

        <div className="flex mb-2 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Promo Code (Optional)"
            className="flex-1 bg-slate-800/50 border border-slate-700 rounded-l-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
          />
          <button className=" bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 cursor-pointer text-white font-semibold px-8 py-3 rounded-r-lg transition-colors">
            Add
          </button>
        </div>

        <p className="text-slate-400 text-sm text-center">
          Looking for promo code?{" "}
          <a
            href="#"
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            Click here
          </a>
        </p>
      </div>

      <div className="bg-[#081A26] p-4 text-white">
        <div className="flex flex-col items-center justify-center gap-4">
          <p>Remaining Free Spin</p>
          <p>14</p>
          <p>Choose a Free Spins Games</p>
        </div>

        <div className="grid lg:grid-cols-5 grid-cols-2 gap-2 mt-4">
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
                className="w-full  h-auto transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaPlay className="text-white text-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeSpins;
