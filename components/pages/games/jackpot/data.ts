import { Game } from "@/components/games/types";

export interface JackpotGame {
  id: number | string;
  name: string;
  provider: string;
  api_provider?: string;
  thumbnail: string;
  demo: boolean;
  slug: string;
  rtp: number | null;
  no_dep_bonus: number;
  lock_game: boolean;
}

export interface JackpotResponse {
  success: boolean;
  message: string;
  games: JackpotGame[];
  pagination: {
    currentPage: number;
    total: number;
    perPage: number;
    lastPage: number;
    nextPageUrl?: string;
  };
}

export const jackpotData: JackpotResponse = {
  success: true,
  message: "Jackpot Games fetched successfully",
  games: [
    {
      id: 75144,
      name: "Big Spin Dice",
      provider: "tiptop",
      api_provider: "CasinoGold",
      thumbnail: "https://media.oiuyoiuyjjjy.com/426/tiptop/300x300/10491.png",
      demo: true,
      slug: "104915706-big-spin-dice",
      rtp: null,
      no_dep_bonus: 0,
      lock_game: false,
    },
    {
      id: 75147,
      name: "Gold Line Gems",
      provider: "tiptop",
      api_provider: "CasinoGold",
      thumbnail: "https://media.oiuyoiuyjjjy.com/426/tiptop/300x300/10667.png",
      demo: true,
      slug: "106677311-gold-line-gems",
      rtp: null,
      no_dep_bonus: 0,
      lock_game: false,
    },
    {
      id: 75150,
      name: "Clover Potter: Power Coins",
      provider: "NetGame",
      api_provider: "CasinoGold",
      thumbnail: "https://media.oiuyoiuyjjjy.com/356/netgame/300x300/11461.png",
      demo: false,
      slug: "114616548-clover-potter:-power-coins",
      rtp: null,
      no_dep_bonus: 0,
      lock_game: false,
    },
    {
      id: 75151,
      name: "Diamond Chest: Hold 'N' Link",
      provider: "NetGame",
      api_provider: "CasinoGold",
      thumbnail: "https://media.oiuyoiuyjjjy.com/356/netgame/300x300/11462.png",
      demo: false,
      slug: "114626447-diamond-chest:-hold-'n'-link",
      rtp: null,
      no_dep_bonus: 0,
      lock_game: false,
    },
    {
      id: 73873,
      name: "J Mania Maniac",
      provider: "rubyplay",
      api_provider: "CasinoGold",
      thumbnail:
        "https://media.oiuyoiuyjjjy.com/421/rubyplay/300x300/14468.png",
      demo: true,
      slug: "144684160-j-mania-maniac",
      rtp: null,
      no_dep_bonus: 0,
      lock_game: false,
    },
    {
      id: 75153,
      name: "Wild Buffalo Megaways: Hold N Link",
      provider: "NetGame",
      api_provider: "CasinoGold",
      thumbnail: "https://media.oiuyoiuyjjjy.com/356/netgame/300x300/11464.png",
      demo: false,
      slug: "114647913-wild-buffalo-megaways:-hold-n-link",
      rtp: null,
      no_dep_bonus: 0,
      lock_game: false,
    },
    {
      id: 75154,
      name: "Piggy Balloons",
      provider: "apparat",
      api_provider: "CasinoGold",
      thumbnail: "https://media.oiuyoiuyjjjy.com/441/apparat/300x300/11465.png",
      demo: true,
      slug: "114658462-piggy-balloons",
      rtp: null,
      no_dep_bonus: 0,
      lock_game: false,
    },
    {
      id: 75155,
      name: "Mustang Hold and Win",
      provider: "booming",
      api_provider: "CasinoGold",
      thumbnail: "https://media.oiuyoiuyjjjy.com/362/booming/300x300/12178.png",
      demo: true,
      slug: "121783209-mustang-hold-and-win",
      rtp: null,
      no_dep_bonus: 0,
      lock_game: false,
    },
    {
      id: 75158,
      name: "3 Big Barrels Aztec",
      provider: "rubyplay",
      api_provider: "CasinoGold",
      thumbnail:
        "https://media.oiuyoiuyjjjy.com/421/rubyplay/300x300/14478.png",
      demo: true,
      slug: "144785222-3-big-barrels-aztec",
      rtp: null,
      no_dep_bonus: 0,
      lock_game: false,
    },
    {
      id: 75160,
      name: "Golden Paw Hold & Win",
      provider: "bgaming",
      api_provider: "CasinoGold",
      thumbnail: "https://media.oiuyoiuyjjjy.com/449/bgaming/300x300/14711.png",
      demo: true,
      slug: "147119193-golden-paw-hold-&-win",
      rtp: null,
      no_dep_bonus: 0,
      lock_game: false,
    },
    {
      id: 75173,
      name: "Super Gummy Strike",
      provider: "Pragmatic",
      api_provider: "CasinoGold",
      thumbnail:
        "https://media.oiuyoiuyjjjy.com/376/pragmatic/300x300/24243.png",
      demo: true,
      slug: "242435187-super-gummy-strike",
      rtp: null,
      no_dep_bonus: 0,
      lock_game: false,
    },
    {
      id: 75176,
      name: "8 Balls of Fire Blazing Bounty",
      provider: "yggdrasil-a",
      api_provider: "CasinoGold",
      thumbnail:
        "https://media.oiuyoiuyjjjy.com/439/yggdrasil-a/300x300/33169.png",
      demo: false,
      slug: "331692215-8-balls-of-fire-blazing-bounty",
      rtp: null,
      no_dep_bonus: 0,
      lock_game: false,
    },
  ],
  pagination: {
    currentPage: 1,
    total: 935,
    perPage: 12,
    lastPage: 78,
    nextPageUrl: "https://backoffice.europa777.com/api/getJackpotGames?page=2",
  },
};

export const mapJackpotGameToGame = (jackpotGame: JackpotGame): Game => ({
  id: Number(jackpotGame.id),
  game_name: jackpotGame.name,
  provider: jackpotGame.provider,
  api_provider: jackpotGame.api_provider || "", // provide default
  thumbnail: jackpotGame.thumbnail,
  demo: jackpotGame.demo ? 1 : 0,
  slug: jackpotGame.slug,
  rtp: jackpotGame.rtp ? String(jackpotGame.rtp) : "",
  no_dep_bonus: jackpotGame.no_dep_bonus,
  lock_game: jackpotGame.lock_game,
});

export const getJackpotGamesLocal = async (
  page: number,
): Promise<JackpotResponse> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // For demo: we just return the same 12 games but prefixed with page number to show it's working
  const mockGames = jackpotData.games.map((g) => ({
    ...g,
    id: `${g.id}-${page}`,
    name: `${g.name} (Pg ${page})`,
  }));

  return {
    success: true,
    message: `Jackpot Games fetched successfully (page ${page})`,
    games: mockGames,
    pagination: {
      currentPage: page,
      total: 120, // 10 pages for demo
      perPage: 12,
      lastPage: 10,
    },
  };
};
