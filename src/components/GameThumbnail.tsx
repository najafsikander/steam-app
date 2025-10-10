import { Image } from '@unpic/react'
import type { game_summary } from '@/type'
import type { FC } from 'react'

type Props = {
    game: game_summary
}
const GameThumbnail: FC<Props> = ({ game }) => {
    return(
        <div
            className="bg-gray-800 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <Image
              src={game.image}
              alt={game.title}
              className="w-full h-auto rounded-t-md"
              layout="constrained"
              width={200}
              height={200}
              loading="lazy"
            />
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold">{game.title}</h2>
              <p className="text-gray-400">{game.description}</p>
            </div>
          </div>
    )
}

export default GameThumbnail