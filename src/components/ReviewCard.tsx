import type { review } from "@/type";
import type { FC } from "react";

type Props = {
    review: review
}

export const ReviewCard:FC<Props> = ({review}) => {
    return(
        <>
        <div className="w-full bg-slate-900 flex flex-row gap-2 p-3 my-2">
              <div className="basis-1/6 flex flex-col">
                <img src={review.user_profile} alt="user profile" className="w-16 h-16 rounded-full mx-auto my-2"/>
                <p className="text-center text-sm font-medium">{review.user_name}</p>
              </div>
              <div className="basis-5/6 w-full flex flex-col justify-center">
                <h3 className="text-lg font-medium">{review.title}</h3>
                <p className="text-xs text-gray-400 mb-2">{review.date}</p>
                <p className="text-sm">{review.content}</p>
              </div>
            </div>
        </>
    )
}

export default ReviewCard;