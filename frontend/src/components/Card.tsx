import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
};

export default (props: Props) => {
    return <div className="card">{props.children}</div>;
};