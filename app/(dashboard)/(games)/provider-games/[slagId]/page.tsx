import { getProviderGames } from "@/actions/games/provider-games";
import { ProviderGames } from "@/components/pages/games/provider-games";

export const metadata = {
  title: `Canada777-Provider Games`,
};

interface PageProps {
  params: Promise<{
    slagId: string;
  }>;
}

export default async function ProviderGamesPage({ params }: PageProps) {
  // In Next.js 15+, params must be awaited
  const { slagId } = await params;

  // Fetch games for this provider
  const { data: response } = await getProviderGames({
    slagId: slagId,
    page: 1,
  });

  // The http.ts already extracts games from response.games to response.data
  // So response.data is the PaginatedResponse<Game[]>
  const paginatedData = response?.data;
  const gamesArray = paginatedData?.data || [];

  return <ProviderGames games={gamesArray} providerName={slagId} />;
}
