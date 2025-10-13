import type { FC } from 'react'

type Props = {
  error: Error | null
  reset?: any
}
const Error: FC<Props> = ({ error, reset }) => {
  return (
    <div className="text-red-500 text-center mt-4 flex flex-col items-center">
      {error?.message || 'An error occurred!'}
      <button
        onClick={reset}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Reset
      </button>
    </div>
  )
}

export default Error
