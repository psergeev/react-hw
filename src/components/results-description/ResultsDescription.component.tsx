import * as React from 'react';
import './ResultsDescription.component.scss';

export interface IResultsDescription {
    genre: string;
}

export function ResultsDescription(props: IResultsDescription) {
    return <div className="results-description">Films by {props.genre} genre</div>;
}
