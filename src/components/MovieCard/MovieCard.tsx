import * as React from 'react';
import { Movie } from '../App/App';
import './MovieCard.scss';

interface Props {
    handleMovieCardClick: (title: string) => void;
    movie: Movie;
}

export default React.memo((props: Props) => {
    const handleMovieCardClick = () => props.handleMovieCardClick(props.movie.title);

    return (
        <ul
            className="movie-card"
            onClick={handleMovieCardClick}
            role="presentation"
        >
            <li><img src={props.movie.poster_path} width="250px" alt="{props.title}" draggable={false} /></li>
            <li className="title-date">
                <span className="title">{props.movie.title}</span>
                <span className="date">{props.movie.release_date.split('-')[0]}</span>
            </li>
            <li className="genres">{props.movie.genres.join(' & ')}</li>
        </ul>
    );
});
