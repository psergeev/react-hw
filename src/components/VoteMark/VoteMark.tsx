import * as React from 'react';
import './VoteMark.scss';

interface Props {
    vote: number;
}

export default React.memo(({ vote }: Props) => (
    <div className="vote-mark">{vote}</div>
));
