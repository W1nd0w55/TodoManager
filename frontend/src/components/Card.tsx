import type { ReactNode } from 'react';
import '../css/Card.css';

interface Props {
    children: ReactNode;
};

export default (props: Props) => {
    return (<div className="card">
        {props.children}
    </div>);
};