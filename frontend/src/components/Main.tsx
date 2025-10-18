import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
};

export default (props: Props) => {
    return <div id="main">{props.children}</div>;
};