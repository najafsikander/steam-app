import { createFileRoute } from '@tanstack/react-router'

import type { game_details } from '@/type'
import { fetchGameById } from '@/services/games.services'
import IntroSection from '@/components/GameDetailsPage/IntroSection'
import PriceSection from '@/components/GameDetailsPage/PriceSection'
import SupportedLanguages from '@/components/GameDetailsPage/SupportedLanguages'
import ExternalLinks from '@/components/GameDetailsPage/ExternalLInks'
import AboutGame from '@/components/GameDetailsPage/AboutGame'

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
        <div className="flex flex-col items-center">
          <IntroSection game={game} />

          {/* Pricing & Supported Languages & External Links */}
          <div className="w-2/3 flex flex-row gap-2  my-3">
            <PriceSection pricing={game.pricing} />
            {/* Supported Languages & External Links */}
            <div className="w-1/3 bg-slate-900 p-3">
              <SupportedLanguages languages={game.lang} />
              <ExternalLinks external_links={game.external_links}/>
            </div>
          </div>

          <AboutGame about_game={game.about_game}/>
        </div>
      </main>
    </>
  )
}
