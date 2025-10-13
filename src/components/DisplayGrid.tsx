import GameThumbnail from './GameThumbnail'
import type { FC } from 'react'
import type { game_info } from '@/type'

type Props = {
  isLoading: boolean,
  games?: [game_info],
  total?: number
}
const DisplayGrid: FC<Props> = ({isLoading, games, total}) => {

  const loadingPlaceholder: game_info = {id: '1', image: 'https://via.placeholder.com/150', name: 'Loading Name..', price: 'Loading Price..'};
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4">Total Games Found: {isLoading ? 'Loading...' : total}</h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4 mt-5">

        {/* Loading Placeholder */}
        {
        isLoading &&
          
            Array.from({ length: 6 }).map((_, index) => (
              <GameThumbnail key={index} game={loadingPlaceholder} />
            ))
          
        }

        {/* Game Card */}
        {
        (isLoading === false && games != null) &&
        games.map((game,index) => (
          <GameThumbnail game={game} key={index}/>
        ))
        }
      </section>
    </>
  )
}
export default DisplayGrid
