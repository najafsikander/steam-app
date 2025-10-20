import type { pricing } from '@/type'
import type { FC } from 'react'

type Props = {
    pricing:pricing
}
const PricingCard:FC<Props> = ({pricing}) => {
    return(
        <>
        <div className='w-full mb-5'>
            <div className='w-full px-4 pt-4 bg-gradient-to-r from-slate-800 to-slate-500 relative'>
                <h3 className='font-medium text-2xl'>Price:</h3>
                <h3>Discount Percentage: {pricing.discount}</h3>
                <h3>Discount Price: {pricing.discountPrice}</h3>
                <h3>Original Price: {pricing.originalPrice}</h3>
                <div className='w-full flex flex-row justify-end relative top-[1rem]'>
                    <h3 className='px-4 py-1 bg-black uppercase'>{pricing.originalPrice}</h3><button type='button' className='px-4 py-1 bg-lime-600 cursor-pointer'>Buy Now</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default PricingCard;