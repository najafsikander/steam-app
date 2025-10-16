import { Image } from '@unpic/react'
import type { FC } from 'react'
import type { game_details } from '@/type'

type Props = {
  game: game_details
}
const InfoIntro: FC<Props> = ({ game }) => {
  const mainImage: string = game.media.screenshot[0]
  const fiveTags: Array<string> = game.tags.slice(0, 5)

  return (
    <>
      <aside className="w-full basis-1/3 bg-slate-800">
        <Image
          src={mainImage}
          alt={mainImage}
          width={300}
          height={300}
          loading="lazy"
          layout="fixed"
          className="w-full mt-12 mb-3"
        />
        <p className="font-medium text-sm mb-3">{game.desc}</p>
        <h4 className="font-bold underline cursor-pointer mt-6">
          Click Here For Reviews
        </h4>
        <p className="text-gray-400 text-sm font-medium mt-8">
          RELEASE DATE: <span className="ml-5">{game.release_date}</span>
        </p>
        <p className="text-gray-400 text-sm font-medium mt-8">
          DEVELOPER:{' '}
          <span className="ml-10 text-blue-400">
            {game.dev_details.developer_name}
          </span>
        </p>
        <p className="text-gray-400 text-sm font-medium">
          PUBLISHER:{' '}
          <span className="ml-11 text-blue-400">
            {game.dev_details.developer_name}
          </span>
        </p>
        <p className="text-gray-400 text-xs font-medium mt-5">
          Popular user-defined tags for this product:
        </p>
        <div className="flex w-full justify-start mt-1 gap-2">
          {fiveTags.map((tag: string) => (
            <button
              type="button"
              className="text-xs font-medium bg-blue-500 text-cyan-300 py-1 px-2 hover:bg-cyan-300 hover:text-blue-500 cursor-pointer"
            >
              {tag}
            </button>
          ))}
          <button
            type="button"
            className="text-xs font-medium bg-blue-500 text-cyan-300 py-1 px-2 hover:bg-cyan-300 hover:text-blue-500 cursor-pointer"
          >
            &#x002B;
          </button>
        </div>
      </aside>
    </>
  )
}

export default InfoIntro
