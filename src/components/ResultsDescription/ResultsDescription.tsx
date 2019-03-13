import * as React from 'react';
import './ResultsDescription.scss';

interface Props {
    genre: string;
}

export default React.memo((props: Props) => (
    <div className="results-description">{`Films by ${props.genre} genre`}</div>
));
