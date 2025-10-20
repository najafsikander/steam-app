import GradientBorder from '../GradientBorder'
import ReqOS from './ReqOS'

import type { sys_req } from '@/type'
import type { FC } from 'react'

type Props = {
  sys_req: sys_req
}

const SystemReqMain: FC<Props> = ({ sys_req }) => {
  const { window, linux } = sys_req

  return (
    <section className="w-2/3 bg-slate-800 p-3 mt-1 mb-3">
      <h2 className="text-2xl font-medium">System Requirements</h2>
      <GradientBorder />
      {window && (
        <ReqOS os={window} os_name="Windows" />
      )}

      {linux&& (
        <ReqOS os={linux} os_name="Linux" />
      )}
    </section>
  )
}

export default SystemReqMain
