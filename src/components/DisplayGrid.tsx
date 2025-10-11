import GameThumbnail from './GameThumbnail'
import type { FC } from 'react'
import type { game_info } from '@/type'

type Props = {
  games: [game_info],
  total: number
}
const DisplayGrid: FC<Props> = ({games,total}) => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Total Games Found: {total}</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-5">
        {/* Game Card */}
        {games.map((game,index) => (
          <GameThumbnail game={game} key={index}/>
        ))}
      </section>
    </>
  )
}
export default DisplayGrid
