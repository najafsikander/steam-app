import { Image } from '@unpic/react'
import { Link } from '@tanstack/react-router'

import type { game_info } from '@/type'
import type { FC } from 'react'


type Props = {
    game: game_info
}
const GameThumbnail: FC<Props> = ({ game }) => {
    return(
        <Link to={`${game.id}`}>
        <div
            className="bg-gray-800 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <Image
              src={game.image}
              alt={game.name}
              className="w-full h-auto rounded-t-md"
              layout="constrained"
              width={200}
              height={200}
              loading="lazy"
            />
            <div className="px-4 py-2">
              <h2 className="text-lg font-semibold">{game.name}</h2>
              <p className="text-gray-400">{game.price}</p>
            </div>
          </div>
        </Link>
    )
}

export default GameThumbnail