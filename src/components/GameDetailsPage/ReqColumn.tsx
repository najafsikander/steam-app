import type { FC } from "react";

type Props = {
    reqColumn: Array<string>;
    column_name: string;
}

const ReqColumn:FC<Props> = ({reqColumn,column_name}) => {
    return(
        <>
        <div className="w-full basis-1/2">
              <h4 className="font-semibold">{column_name}:</h4>
              <ul className="list-disc list-inside">
                {reqColumn.map((req:string, index:number) => (
                    <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
        </>
    )
}

export default ReqColumn;