import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
};

export default (props: Props) => {
    return <div className="bg-[#32fff5] rounded-[10px] p-5 text-center" style={{ boxShadow: "0px 0px 10px black" }}>
        {props.children}
    </div>;
};