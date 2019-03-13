import * as React from 'react';
import './VoteMark.scss';

interface Props {
    vote: number;
}

export default React.memo((props: Props) => (
    <div className="vote-mark">{props.vote}</div>
));
