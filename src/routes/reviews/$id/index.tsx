import { createFileRoute } from '@tanstack/react-router'
import type { review } from '@/type'
import ReviewsSummary from '@/components/GameDetailsPage/ReviewsSummary'
import { fetchGameReviewsById } from '@/services/games.services'


export const Route = createFileRoute('/reviews/$id/')({
  loader: async ({ params }) => {
      const gameId = params.id
      const mostRecentReviews: Array<review> = await fetchGameReviewsById(gameId, 'mostrecent', 5)
      const topRatedReviews: Array<review> = await fetchGameReviewsById(gameId, 'toprated', 5)
      const funnyReviews: Array<review> = await fetchGameReviewsById(gameId, 'funny', 5)
      const trendingYearReviews: Array<review> = await fetchGameReviewsById(gameId, 'trendyear', 5)
      return {gameId, mostRecentReviews, topRatedReviews, funnyReviews, trendingYearReviews }
    },
  component: ReviewsPage,
})

function ReviewsPage() {
  const { mostRecentReviews, topRatedReviews, funnyReviews, trendingYearReviews } = Route.useLoaderData()

  console.log({mostRecentReviews, topRatedReviews, funnyReviews, trendingYearReviews})
  return (
    <section className='w-full grid grid-cols-2 gap-3'>
        <ReviewsSummary reviews={mostRecentReviews} isSummary={false} heading='Most Recent'/>
        <ReviewsSummary reviews={topRatedReviews} isSummary={false} heading='Top Rated'/>
        <ReviewsSummary reviews={funnyReviews} isSummary={false} heading='Funny'/>
        <ReviewsSummary reviews={trendingYearReviews} isSummary={false} heading='Trending Year'/>
    </section>
  )
}
