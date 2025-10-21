import GradientBorder from "../GradientBorder";
import ReviewCard from "../ReviewCard";

import type { FC } from "react";
import type { review } from "@/type";



type Props = {
    reviews: Array<review>;
}

const ReviewsSummary:FC<Props> = ({ reviews }) => {
    return(
        <>
        <section className="w-2/3 bg-slate-800 p-3 mt-1 mb-3">
            <h2 className="text-2xl font-medium">Reviews Summary<span className="text-sm">(Most Recent)</span></h2>
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