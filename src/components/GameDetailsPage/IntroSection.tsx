import MediaIntro from './MediaIntro'
import InfoIntro from './InfoIntro'

import type { game_details } from '@/type'
import type { FC } from 'react'

type Props = {
  game: game_details
}
const IntroSection: FC<Props> = ({ game }) => {
  console.log('Selected Game: ', game)

  return (
    <>
      <section className="w-2/3 flex justify-center gap-2">
        {/* Left Side - Media. */}
        <MediaIntro game={game} />

        {/* Right Side - Info. */}
        <InfoIntro game={game} />
      </section>
    </>
  )
}

export default IntroSection
