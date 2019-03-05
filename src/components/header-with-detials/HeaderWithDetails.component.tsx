import * as React from 'react';
import './HeaderWithDetails.component.scss';
import { VoteMark } from '../vote-mark/VoteMark.component';
import { IMovie } from '../App.component';
import { MouseEventHandler } from 'react';

export interface IHeaderWithDetailsProps {
    movie: IMovie;
    handleBackToSearchClick: MouseEventHandler;
}

export function HeaderWithDetails(props: IHeaderWithDetailsProps) {
    return (
        <header>
            <div className="top-line">
                <h1 className="title">netflixroulette</h1>
                <button onClick={props.handleBackToSearchClick}>BACK TO SEARCH</button>
            </div>
            <div className="details-line">
                <img src={props.movie.poster_path} alt={props.movie.title} />
                <ul className="details">
                    <li>
                        <span className="title">{props.movie.title}</span>
                        <VoteMark vote={props.movie.vote_average} />
                    </li>
                    <li className="tagline">{props.movie.tagline}</li>
                    <li>
                        <span className="release-date">{props.movie.release_date.split('-')[0]}</span>
                        <span className="runtime">{props.movie.runtime} min</span>
                    </li>
                    <li className="overview">{props.movie.overview}</li>
                </ul>
            </div>
        </header>
    );
}
