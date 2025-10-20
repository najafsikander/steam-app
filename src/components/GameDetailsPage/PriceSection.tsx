import PricingCard from './PricingCard'

import type { pricing } from '@/type'
import type { FC } from 'react'

type Props = {
  pricing: [pricing]
}
const PriceSection: FC<Props> = ({ pricing }) => {
  return (
    <>
      <section className="w-full">
        {
            pricing.map((price:pricing,index:number) => (
                <PricingCard pricing={price} key={index}/>
            ))
        }
      </section>
    </>
  )
}

export default PriceSection
