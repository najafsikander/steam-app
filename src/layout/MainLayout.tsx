import type { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
}
const MainLayout:FC<Props> = ({children}) => {
    return (
        <>
        <div className="w-full min-h-screen bg-gray-900 text-white p-4">
            {children}
        </div>
        </>
    )
}
export default MainLayout