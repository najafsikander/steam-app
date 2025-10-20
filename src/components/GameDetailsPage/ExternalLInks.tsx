import type { external_link } from "@/type";
import type { FC } from "react";

type Props = {
    external_links: Array<external_link>
}

const ExternalLinks:FC<Props> = ({external_links}) => {
    return(
        <>
        <section className="mt-6">
        <h1 className="font-bold mb-3">External Links</h1>
        <div className="flex flex-col gap-2">
            {
                external_links.map((link:external_link,index:number) => (
                    <a key={index} href={link.link} target="_blank" className="underline text-sm font-medium"><span className="uppercase">{link.name}</span></a>
                ))}
        </div>
        </section>
        </>
    )
}

export default ExternalLinks;