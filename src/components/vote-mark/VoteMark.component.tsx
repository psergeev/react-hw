import * as React from 'react';
import './VoteMark.component.scss';

export function VoteMark(props: any) {
    return <div className="vote-mark">{props.vote}</div>;
}
