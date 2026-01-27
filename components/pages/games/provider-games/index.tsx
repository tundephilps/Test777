"use client";

import { Games } from "@/components/ui/games";
import { Game } from "@/types/api-schema/schema";
import { FaGamepad } from "react-icons/fa";

interface ProviderGamesProps {
  games: Game[];
  providerName: string;
}

export const ProviderGames = ({ games, providerName }: ProviderGamesProps) => {
  const displayName = providerName || "Provider";

  return (
    <div>
      <h2 className="text-center py-3 mb-8 mt-10 text-white text-3xl font-semibold capitalize">
        {displayName} Games
      </h2>

      {games && games.length > 0 ? (
        <Games
          games={games}
          icon={<FaGamepad />}
          title={`${displayName} Games`}
          url=""
        />
      ) : (
        <div className="text-center text-white py-10">
          <p>No games found for {displayName}</p>
        </div>
      )}
    </div>
  );
};
