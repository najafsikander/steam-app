import GameThumbnail from './GameThumbnail'
import type { FC } from 'react'
import type { game_summary } from '@/type'

const DisplayGrid: FC = () => {
  const gameObj: game_summary = {
    id: '1',
    title: 'Cyberpunk 2077',
    description:
      "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character's cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.",
    image:
      'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
  }
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-5">
        {/* Game Card */}
        {Array.from({ length: 8 }, () => gameObj).map((game) => (
          <GameThumbnail game={game} key={game.id}/>
        ))}
      </section>
    </>
  )
}
export default DisplayGrid
