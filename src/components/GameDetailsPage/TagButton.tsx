import type { FC } from "react";

type Props = {
    tag: string
}

const TagButton: FC<Props> = ({tag}) => {
    return(
        <>
        <button
              key={tag}
              type="button"
              className="text-xs font-medium bg-blue-500 text-cyan-300 py-1 px-2 hover:bg-cyan-300 hover:text-blue-500 cursor-pointer"
            >
              {tag}
            </button>
        </>
    )
}
export default TagButton;