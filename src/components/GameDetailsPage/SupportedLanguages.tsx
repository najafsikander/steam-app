import TagButton from "./TagButton"
import type { FC } from "react"


type Props = {
    languages: Array<string>
}

const SupportedLanguages:FC<Props> = ({languages}) => {
  return (
    <>
      <h3 className="font-bold mb-3">Supported Languages</h3>
        <div className="flex flex-wrap gap-2">
            {
            languages.map((language:string,index:number) => (
                <TagButton key={index} tag={language} />
            ))}
        </div>
    </>
  )
}

export default SupportedLanguages
