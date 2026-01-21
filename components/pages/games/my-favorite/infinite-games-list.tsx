"use client";

import { getFavoriteGames } from "@/actions/games/my-favorite";
import { Games } from "@/components/games";
import { Game } from "@/types/api-schema/schema";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

interface InfiniteGamesListProps {
  initialGames: Game[];
}

export const InfiniteGamesList = ({ initialGames }: InfiniteGamesListProps) => {
  const [games, setGames] = useState<Game[]>(initialGames);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef<HTMLDivElement>(null);

  const loadMoreGames = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const { data: response } = await getFavoriteGames({ page });

      const gameData = response?.data;
      const newGames = Array.isArray(gameData)
        ? gameData
        : gameData?.data || [];

      if (newGames.length === 0) {
        setHasMore(false);
      } else {
        setGames((prev) => [...prev, ...newGames]);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Failed to load more favorite games", error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreGames();
        }
      },
      { threshold: 1.0 },
    );

    const currentTarget = observerTarget.current;

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loadMoreGames]);

  return (
    <>
      <Games games={games} icon={<FaHeart />} title={"My Favorite"} url="" />

      {/* Loading Sentinel */}
      <div ref={observerTarget} className="flex justify-center py-8">
        {loading && (
          <ImSpinner2 className="animate-spin text-3xl text-red-600" />
        )}
      </div>
    </>
  );
};
