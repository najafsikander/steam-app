import { createFileRoute } from '@tanstack/react-router'
import type { game_details } from '@/type';
import { fetchGameById } from '@/services/games.services';

export const Route = createFileRoute('/$id/')({
  loader: async ({params}) => {
    const gameId = params.id;
    // Fetch game details using the gameId
    const game:game_details = await fetchGameById(gameId);
    return { gameId, game };
  },
  component: GameDetailsPage,
})

function GameDetailsPage() {
  const {game,gameId} = Route.useLoaderData();
  return (
    <>
      <h1 className="text-3xl font-bold">Game Details: {gameId}</h1>
      <pre>{JSON.stringify(game, null, 2)}</pre>
    </>
  )
}