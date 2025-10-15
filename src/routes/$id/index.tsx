import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import { useState } from 'react'

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
  const [currMediaDisplay, setCurrMediaDisplay] = useState<string>(
    game.media.screenshot[0],
  )
  const mainImage: string = game.media.screenshot[0];

  console.log('Selected Game: ', game)

  return (
    <>
      <main className="w-full min-h-screen my-4 px-4 bg-slate-200 flex flex-row justify-center">
        <section className="w-2/3 flex justify-center bg-slate-700 gap-2">
          {/* Left Side - Media */}
          <div className="w-full basis-2/3 bg-slate-900 flex flex-col">
            <h1 className='font-medium text-3xl mb-3'>{game.name}</h1>
            <Image
              src={currMediaDisplay}
              alt={currMediaDisplay}
              width={500}
              height={500}
              loading="lazy"
              className="w-full"
            />
            <div className="flex flex-row w-full h-auto overflow-scroll gap-2 mt-2">
              {game.media.screenshot.map((img: string) => (
                <Image
                  key={img}
                  src={img}
                  alt={img}
                  width={100}
                  height={100}
                  className="w-[20vh] h-[10vh] cursor-pointer"
                  loading="lazy"
                  layout="fixed"
                  onClick={() => setCurrMediaDisplay(img)}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Info */}
          <aside className="w-full basis-1/3 bg-slate-800">
            <Image src={mainImage} alt={mainImage} width={300} height={300} loading='lazy' layout='fixed' className='w-full mt-12 mb-3'/>
            <p className='font-medium text-sm mb-3'>{game.desc}</p>
          </aside>
        </section>
      </main>
    </>
  )
}
