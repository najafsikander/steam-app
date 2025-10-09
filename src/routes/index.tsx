import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return <div>
    <h1>Welcome to the Steam App</h1>
  </div>
}
