"use client";

import { useAuth } from "@/contexts/auth-context";
import { useModal } from "@/contexts/modal-context";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { BiLock } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { IoEllipsisHorizontal, IoHeart } from "react-icons/io5";
import { GameCardProps } from "./types";

export const GameCard: React.FC<GameCardProps> = ({
  game,
  onFavoriteToggle,
  onPlayClick,
  onDemoClick,
  isFavorite = false,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const { isAuthenticated } = useAuth();
  const { openModal } = useModal();

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      openModal("login");
      return;
    }
    onFavoriteToggle?.(game.id);
  };

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onPlayClick?.(game);
  };

  const handleDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDemoClick?.(game);
  };

  const handleMobileToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const playGame = useMemo(() => {
    if (isAuthenticated) {
      if (game?.no_dep_bonus === 0 && game?.lock_game === true) {
        return (
          <>
            <h6 className="bg-red-500/80 py-1 px-3 rounded-lg text-white mb-1 flex items-center gap-1">
              <BiLock width={16} height={16} color="white" />
              Lock
            </h6>
            <Link
              href="/deposit"
              className="bg-white mt-1 block py-1 px-3 rounded-lg text-sm"
            >
              Deposit to Play
            </Link>
          </>
        );
      }
      return (
        <Link
          href={`play-game/${game?.slug}`}
          className="flex items-center cursor-pointer gap-2 bg-linear-to-b from-[#f80507] to-[#860001] text-white px-8 py-2.5 rounded-full font-semibold mb-2 hover:scale-105 transition-transform"
        >
          <FaPlay /> Play
        </Link>
      );
    }
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openModal("login");
        }}
        className="flex items-center cursor-pointer gap-2 bg-linear-to-b from-[#f80507] to-[#860001] text-white px-8 py-2.5 rounded-full font-semibold mb-2 hover:scale-105 transition-transform"
      >
        <FaPlay /> Play
      </button>
    );
  }, [
    isAuthenticated,
    game?.no_dep_bonus,
    game?.lock_game,
    game?.slug,
    openModal,
  ]);

  return (
    <div className="relative group overflow-hidden rounded-lg transition-all hover:-translate-y-1 duration-300">
      {/* Image */}
      <div className="relative w-full h-64">
        {isImageLoading && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg" />
        )}
        <Image
          src={game?.thumbnail}
          fill
          alt={game?.game_name}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onLoad={() => setIsImageLoading(false)}
        />
      </div>

      {/* DESKTOP hover overlay */}
      <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {playGame}

        {game?.demo === 1 && (
          <Link
            href={`demo-link/${game.slug}`}
            className="flex items-center cursor-pointer gap-2 bg-white/20 text-white px-6 py-2.5 rounded-full hover:bg-white/30 transition-colors"
          >
            Demo
          </Link>
        )}
      </div>

      {/* RTP Badge - Top Left */}
      {game?.rtp && (
        <div className="absolute top-2 left-2 bg-linear-to-r from-green-500/90 to-emerald-600/90 backdrop-blur-sm px-2.5 py-1 rounded-full z-20">
          <span className="text-white text-xs font-bold">RTP {game?.rtp}%</span>
        </div>
      )}

      {/* DESKTOP favorite */}
      <button
        onClick={handleFavorite}
        className="hidden lg:flex absolute top-2 right-2 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors z-20"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <IoHeart
          className={`text-xl transition-colors ${
            isFavorite ? "text-red-500 fill-red-500" : "text-white"
          }`}
        />
      </button>

      {/* MOBILE FAB */}
      <button
        onClick={handleMobileToggle}
        className="lg:hidden absolute bottom-2 right-2 bg-black/70 text-white p-2 rounded-full z-20 hover:bg-black/90 transition-colors"
        aria-label="Toggle game options"
      >
        <IoEllipsisHorizontal />
      </button>

      {/* MOBILE ACTIONS */}
      <div
        className={`lg:hidden absolute inset-0 bg-black/70 flex flex-col items-center justify-center transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleMobileToggle}
      >
        {/* Favorite */}
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <IoHeart
            className={`text-xl transition-colors ${
              isFavorite ? "text-red-500 fill-red-500" : "text-white"
            }`}
          />
        </button>

        {playGame}

        {game?.demo === 1 && (
          <Link
            href={`demo-link/${game.slug}`}
            className="flex items-center cursor-pointer gap-2 bg-white/20 text-white px-6 py-2.5 rounded-full hover:bg-white/30 transition-colors"
          >
            Demo
          </Link>
        )}
      </div>

      {/* Name */}
      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-3 transition-all duration-300 pointer-events-none">
        <p className="text-white font-semibold text-center text-sm line-clamp-1">
          {game.game_name}
        </p>
      </div>
    </div>
  );
};
