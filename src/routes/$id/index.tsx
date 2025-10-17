import { createFileRoute } from '@tanstack/react-router'

import type { game_details } from '@/type'
import { fetchGameById } from '@/services/games.services'
import IntroSection from '@/components/GameDetailsPage/IntroSection'


// TODO:COMPLETE THE PAGE
export const Route = createFileRoute('/$id/')({
  loader: async ({ params }) => {
    const gameId = params.id
    // Fetch game details using the gameId
    const game: game_details = await fetchGameById(gameId)
    return { gameId, game }
  },
  component: GameDetailsPage,
})

function GameDetailsPage() {
  const { game } = Route.useLoaderData()

  return (
    <>
      <main className="w-full min-h-screen my-4 px-4 bg-slate-200 flex flex-row justify-center">
        <IntroSection game={game} />
      </main>
    </>
  )
}
