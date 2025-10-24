import type { ReactNode } from 'react';

interface Props {
    href: string;
    children: ReactNode
};

export default (props: Props) => {
    return <a className="btn-like-link" href={props.href}>{props.children}</a>;
};