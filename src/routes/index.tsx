import { createFileRoute } from '@tanstack/react-router'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { useState } from 'react'

import SearchForm from '@/components/SearchForm'
import DisplayGrid from '@/components/DisplayGrid'
import { searchGames } from '@/services/games.services'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [searchGame, setSearchGame] = useState<string>();

  const gamesQuery = queryOptions({
    queryKey: ['games', searchGame],
    queryFn: () => searchGames(searchGame!),
  })

  const {data} = useSuspenseQuery(gamesQuery);

  console.log('Fetched games: ',data);

  return (
    <>
      <section className="w-full mt-5 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Steam App {searchGame}</h1>
        <SearchForm setSearchGame={setSearchGame}/>
        <DisplayGrid games={data.search} total={data.total} />
      </section>
    </>
  )
}
