import { useEffect, useState } from 'react'
import { Image } from '@unpic/react'

import type { game_details, media } from '@/type'
import type { FC } from 'react'
import { isValidMediaUrl } from '@/helpers/media'

type Props = {
  game: game_details
}

const MediaIntro: FC<Props> = ({ game }) => {
  const [medias, setCurrentMedias] = useState<Array<media>>([])

  const [currMedia, setCurrMedia] = useState<media>({
    type: 'image',
    url: game.media.screenshot[0] || '',
  })

  const combineAllMedias = () => {
    for (const video of game.media.videos) {
      if (isValidMediaUrl(video)) {
        setCurrentMedias((oldData) => [...oldData, { type: 'video', url: video }])
      }
    }

    for (const img of game.media.screenshot) {
      if (isValidMediaUrl(img)) {
        setCurrentMedias((oldData) => [...oldData, { type: 'image', url: img }])
      }
    }
  }

  useEffect(() => {
    combineAllMedias()
  }, [])

  useEffect(() => {
    console.table(medias)
  }, [medias])

  const renderCurrentMedia = (media: media) => {
    const { type, url } = media
    console.log('Current media: ', type, url)
    if (type === 'image' && isValidMediaUrl(url))
      return (
        <Image
          src={url}
          alt={url}
          width={500}
          height={500}
          loading="lazy"
          className="w-full"
        />
      )

    if (type === 'video' && isValidMediaUrl(url))
      return (
        <video
          width={500}
          height={500}
          controls
          autoPlay
          loop
          playsInline
          className="w-full"
          onClick={() => setCurrMedia(media)}
        >
          <source src={url} type="video/webm" />
          <source src={url} type="video/mp4" />
        </video>
      )
  }

  const renderMediaContent = (media: { type: string; url: string }, index:number) => {
    const { type, url } = media
    console.log('Current media: ', type, url)

    let mediaItem

    if (type == 'image' && isValidMediaUrl(url)) {
      mediaItem = (
        <Image
          key={index}
          src={url}
          alt={url}
          width={100}
          height={100}
          className="w-[20vh] h-[10vh] cursor-pointer"
          loading="lazy"
          layout="fixed"
          onClick={() => setCurrMedia(media)}
        />
      )
    }

    if (type == 'video' && isValidMediaUrl(url)) {
      mediaItem = (
        <video
          key={index}
          width={100}
          height={100}
          controls
          loop
          playsInline
          muted
          className="w-[20vh] h-[10vh] cursor-pointer"
          onClick={() => setCurrMedia(media)}
        >
          <source src={url} type="video/webm" />
          <source src={url} type="video/mp4" />
        </video>
      )
    }

    return mediaItem
  }

  return (
    <>
      <div className="w-full basis-2/3 bg-slate-900 flex flex-col">
        <h1 className="font-medium text-3xl mb-3">{game.name}</h1>
        {renderCurrentMedia(currMedia)}
        {medias.length > 0 && (
          <div className="flex flex-row w-full h-auto overflow-x-scroll gap-2 mt-2">
            {medias.map((media: { type: string; url: string }, index:number) =>
              renderMediaContent(media,index),
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default MediaIntro
