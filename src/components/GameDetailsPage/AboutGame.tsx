import type { FC } from "react";

type Props = {
    about_game: string;
}

const AboutGame:FC<Props> = ({about_game}) => {
    return(
        <>
        <section className="w-2/3 bg-slate-800 p-3 mt-1 mb-3">
            <h2 className="text-2xl font-medium">About this game</h2>
            {/* Gradient Border */}
            <div className="my-2 bg-gradient-to-r from-blue-300 to-gray-300 h-[0.1rem]"></div>
            <p>{about_game}</p>
        </section>
        </>
    )
}

export default AboutGame;