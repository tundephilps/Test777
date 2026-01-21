import Link from "next/link";
import { GameCard } from "./game-card";
import { GamesProps } from "./types";

export const Games = ({ icon, title, games, url = "/slots" }: GamesProps) => {
  return (
    <section>
      {/* header */}
      <div>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2 text-white">
            {icon}
            <span className="font-semibold">{title}</span>
          </div>

          {url && (
            <Link
              href={url}
              className="text-sm text-gray-300 border-t border-gray-800 bg-[#071a26] hover:bg-[#102a3a] py-2 px-3 rounded-md"
            >
              View All
            </Link>
          )}
        </div>
      </div>

      {/* games */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {Array.isArray(games) &&
          games.map((game) => <GameCard key={game.id} game={game} />)}
      </div>
    </section>
  );
};
