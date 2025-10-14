import type { FC } from "react";

type Props = {
    data?:any
}
export const NotFound:FC<Props> = ({data}) => {
    return(
        <>
            <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4">The page you are looking for does not exist.</p>
            {data && <pre className="mt-4 text-sm bg-gray-800 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>}
        </>
    )
}

export default NotFound;