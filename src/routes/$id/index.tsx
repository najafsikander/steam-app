import { createFileRoute } from '@tanstack/react-router'

import type { game_details, review } from '@/type'
import { fetchGameById, fetchGameReviewsById } from '@/services/games.services'
import IntroSection from '@/components/GameDetailsPage/IntroSection'
import PriceSection from '@/components/GameDetailsPage/PriceSection'
import SupportedLanguages from '@/components/GameDetailsPage/SupportedLanguages'
import ExternalLinks from '@/components/GameDetailsPage/ExternalLInks'
import AboutGame from '@/components/GameDetailsPage/AboutGame'
import SystemReqMain from '@/components/GameDetailsPage/SystemReqMain'
import ReviewsSummary from '@/components/GameDetailsPage/ReviewsSummary'

// TODO:COMPLETE THE PAGE
export const Route = createFileRoute('/$id/')({
  loader: async ({ params }) => {
    const gameId = params.id
    // Fetch game details using the gameId
    const game: game_details = await fetchGameById(gameId)
    const reviews: Array<review> = await fetchGameReviewsById(gameId, 'mostrecent', 5)
    return { gameId, game, reviews }
  },
  component: GameDetailsPage,
})

function GameDetailsPage() {
  const { game, reviews } = Route.useLoaderData()

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
          <SystemReqMain sys_req={game.sys_req}/>
          <ReviewsSummary reviews={reviews}/>
        </div>
      </main>
    </>
  )
}
