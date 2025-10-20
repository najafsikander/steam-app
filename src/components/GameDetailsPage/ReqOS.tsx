import ReqColumn from "./ReqColumn";
import type { FC } from "react";

type Props = {
    os: {
        min: Array<string>;
        recomm: Array<string>;
    };
    os_name: string;
}

const ReqOS:FC<Props> = ({os,os_name}) => {
    return(
        <>
        <section className="w-full mb-3">
          <h3 className="text-xl font-semibold">{os_name}</h3>
          <div className="flex flex-row gap-5">
            <ReqColumn reqColumn={os.min} column_name="Minimum" />
            <ReqColumn reqColumn={os.recomm} column_name="Recommended" />
          </div>
        </section>
        </>
    )
}

export default ReqOS;