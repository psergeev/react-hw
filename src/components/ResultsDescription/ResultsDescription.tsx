import * as React from 'react';
import './ResultsDescription.scss';

interface Props {
    genre: string;
}

export default React.memo(({ genre }: Props) => (
    <div className="results-description">{`Films by ${genre} genre`}</div>
));
