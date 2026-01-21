"use client";

import { playGame } from "@/actions/games/play-game";
import { useAction } from "@/hooks/use-action";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef, useState } from "react";

export const PlayGames = ({ slugId }: { slugId: string }) => {
  const [gameUrl, setGameUrl] = useState<string | null>(null);
  const toast = useToast();

  console.log("gameUrl", gameUrl);

  const fetchedRef = useRef<string | null>(null);

  const {
    execute,
    isLoading: loading,
    error,
  } = useAction(playGame, {
    onSuccess: (data) => {
      // Unwrap the Response object first
      const gameData = data?.data;

      // Handle different possible response structures
      if (typeof gameData === "string") {
        setGameUrl(gameData);
      } else if (gameData?.url) {
        setGameUrl(gameData.url);
      } else if (gameData?.game_url) {
        setGameUrl(gameData.game_url);
      } else {
        console.error("Unknown game data format:", gameData);
        toast.error("Failed to load game URL");
      }
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  useEffect(() => {
    if (slugId && fetchedRef.current !== slugId) {
      fetchedRef.current = slugId;
      execute({ slug: slugId });
    }
  }, [slugId, execute]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[80vh] text-white">
        <div className="animate-pulse text-xl">Loading game...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[80vh] text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!gameUrl) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-99 bg-black">
      <iframe
        src={gameUrl}
        className="w-screen h-screen"
        allowFullScreen
        allow="autoplay; encrypted-media; fullscreen"
        title="Game Frame"
      />
    </div>
  );
};
