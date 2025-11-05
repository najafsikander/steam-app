import GradientBorder from "../GradientBorder";
import ReviewCard from "../ReviewCard";

import type { FC } from "react";
import type { review } from "@/type";



type Props = {
    reviews: Array<review>;
    isSummary?: boolean;
    heading: string;
}

const ReviewsSummary:FC<Props> = ({ reviews, heading, isSummary }) => {
    return(
        <>
        <section className={`${isSummary ? 'w-2/3' : 'w-full'} bg-slate-800 p-3 mt-1 mb-3`}>
        {
            isSummary &&
            <h2 className="text-2xl font-medium">Reviews Summary<span className="text-sm">(Most Recent)</span></h2>
        }
        {
            !isSummary &&
            <h2 className="text-2xl font-medium">{heading}</h2>

        }
            <GradientBorder/>
            {
                reviews.map((review:review) => (
                    <ReviewCard key={review.review_id} review={review}/>
                ))
            }
        </section>
        </>
    )
}

export default ReviewsSummary;