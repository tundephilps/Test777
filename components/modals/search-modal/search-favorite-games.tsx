"use client";

import { getFavoriteGames } from "@/actions/search/favorites";
import { GameCard } from "@/components/ui/games/game-card";
import { useModal } from "@/contexts/modal-context";
import { Game } from "@/types/api-schema/schema";
import { useEffect, useState, useTransition } from "react";
import { toast } from "react-hot-toast";

interface SearchFavoriteGamesProps {
  query: string;
}

export const SearchFavoriteGames = ({ query }: SearchFavoriteGamesProps) => {
  const { closeModal } = useModal();
  const [isPending, startTransition] = useTransition();
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      startTransition(async () => {
        const result = await getFavoriteGames({ query, page: 1 });

        if (result?.error) {
          toast.error(result.error);
        } else if (result?.data?.data?.data) {
          setGames(result.data.data.data);
        } else {
          setGames([]);
        }
        setLoading(false);
      });
    };

    const debounceTimer = setTimeout(fetchGames, query ? 500 : 0);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        </div>
      ) : games.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {games.map((game) => (
            <div key={game.id} onClick={closeModal} className="cursor-pointer">
              <GameCard game={game} />
            </div>
          ))}
        </div>
      ) : query.length >= 1 ? (
        <div className="text-center py-10 text-gray-400">
          No favorite games found for &quot;{query}&quot;
        </div>
      ) : (
        <div className="text-center py-10 text-gray-400">
          No favorite games added yet
        </div>
      )}
    </div>
  );
};
