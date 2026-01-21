import { DemoGames } from "@/components/pages/games/demo-games";

type PageProps = {
  params: Promise<{
    slagId: string;
  }>;
};

export default async function PlayGamePage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slagId } = resolvedParams;

  return <DemoGames slugId={slagId} />;
}
