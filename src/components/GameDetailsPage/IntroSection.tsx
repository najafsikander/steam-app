import MediaIntro from './MediaIntro'
import InfoIntro from './InfoIntro'

import type { game_details } from '@/type'
import type { FC } from 'react'

type Props = {
  game: game_details,
  gameId: string,
  screenshots: Array<string>,
  videos: Array<string>
}
const IntroSection: FC<Props> = ({ game, gameId, screenshots, videos }) => {
  console.log('Selected Game: ', game)

  return (
    <>
      <section className="w-2/3 flex justify-center gap-2">
        {/* Left Side - Media. */}
        <MediaIntro game={game} screenshots={screenshots} videos={videos} />

        {/* Right Side - Info. */}
        <InfoIntro game={game} gameId={gameId} mainImage={screenshots[0]} />
      </section>
    </>
  )
}

export default IntroSection
