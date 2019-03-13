import * as React from 'react';
import { Movie } from '../../App';
import VoteMark from '../VoteMark';
import './HeaderWithDetails.scss';

interface Props {
    movie: Movie;
    handleBackToSearchClick: React.MouseEventHandler;
}

export default React.memo((props: Props) => (
    <header>
        <div className="top-line">
            <h1 className="title">netflixroulette</h1>
            <button type="button" onClick={props.handleBackToSearchClick}>BACK TO SEARCH</button>
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
                    <span className="runtime">{`${props.movie.runtime} min`}</span>
                </li>
                <li className="overview">{props.movie.overview}</li>
            </ul>
        </div>
    </header>
));
