"use client";

import { IMAGES } from "@/lib/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaTrophy } from "react-icons/fa";
import { Games } from "../games";
import { Game } from "../games/types";

const Jackpot = ({ jackpotGames }: { jackpotGames: Game[] }) => {
  const t = useTranslations("HomePage");

  return (
    <div
      className="my-8 min-h-[400px] relative bg-cover w-full bg-top bg-no-repeat px-4 py-12"
      style={{ backgroundImage: `url(${IMAGES.JackpotMask})` }}
    >
      {/* Center Jackpot2 */}
      <Image
        src={IMAGES.Jackpot2}
        width={1000}
        height={1000}
        alt=""
        className="w-auto h-auto mx-auto mb-6"
      />

      {/* Cards */}
      <Games
        games={jackpotGames || []}
        url="#"
        icon={<FaTrophy />}
        title="Jackpot Games"
      />

      <div className="flex justify-center mt-6 mx-auto w-full">
        <Link
          href={"/jackpot"}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-semibold"
        >
          Load More
        </Link>
      </div>
    </div>
  );
};

export default Jackpot;
