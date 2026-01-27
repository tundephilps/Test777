import { getTournamentDetails } from "@/actions/games/tournament";
import { TournamentCard } from "./tournament-card";

export const Tournament = async () => {
  const { data: response } = await getTournamentDetails({});
  const tournaments = response?.data || [];

  return (
    <section>
      <div className="lg:w-[80%] mx-auto mt-10">
        {tournaments.length > 0 ? (
          tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))
        ) : (
          <div className="text-center py-20 text-gray-400">
            No active tournaments found.
          </div>
        )}
      </div>
    </section>
  );
};
