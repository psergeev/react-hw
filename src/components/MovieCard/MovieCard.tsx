import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Movie } from '../App/App';
import './MovieCard.scss';

interface Props extends RouteComponentProps<any> {
    handleMovieCardClick: (title: string) => void;
    movie: Movie;
}

export default React.memo(({ handleMovieCardClick, movie, history }: Props) => {
    const _handleMovieCardClick = () => {
        history.push(`/film/${movie.id}`);
        handleMovieCardClick(movie.title);
    };

    return (
        <ul
            className="movie-card"
            onClick={_handleMovieCardClick}
            role="presentation"
        >
            <li><img src={movie.poster_path} width="250px" alt="{props.title}" draggable={false} /></li>
            <li className="title-date">
                <span className="title">{movie.title}</span>
                <span className="date">{movie.release_date.split('-')[0]}</span>
            </li>
            <li className="genres">{movie.genres.join(' & ')}</li>
        </ul>
    );
});
