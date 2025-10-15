import { createFileRoute } from '@tanstack/react-router'
import type { game_details } from '@/type'
import { fetchGameById } from '@/services/games.services'

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
  const { game, gameId } = Route.useLoaderData()
  return (
    <>
      <main className='w-full min-h-screen my-4 px-4 bg-slate-200 flex flex-row justify-center'>
        <section className='w-2/3 flex justify-center bg-slate-700'>
          <div className='w-full basis-2/3 bg-slate-900'>
            <h1 className='text-white'>Game Id: {gameId}</h1>
          </div>
          <aside className='w-full basis-1/3 bg-slate-700'>
            <p>Details: {game.desc}</p>
          </aside>
        </section>
      </main>
    </>
  )
}
