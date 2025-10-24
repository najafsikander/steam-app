import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/reviews/$id/')({
  component: ReviewsPage,
})

function ReviewsPage() {
    const { id } = Route.useParams()
  return <div>Hello "/reviews/{id}/"!</div>
}
