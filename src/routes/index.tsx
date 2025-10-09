import { createFileRoute } from '@tanstack/react-router'
import SearchForm from '@/components/SearchForm'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
    <section className='w-full mt-5 text-center'>
      <h1 className='text-3xl font-bold'>Welcome to the Steam App</h1>
      <SearchForm/>
    </section>
    </>
  )
}
