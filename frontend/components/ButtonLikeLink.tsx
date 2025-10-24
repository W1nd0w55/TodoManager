import type { ReactNode } from 'react';

interface Props {
    href: string;
    children: ReactNode;
};

export default (props: Props) => {
    return <a className="text-white no-underline bg-[#f0ad67] p-2.5 rounded-[5px]" href={props.href}>{props.children}</a>;
};