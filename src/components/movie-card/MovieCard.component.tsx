import * as React from 'react';
import './MovieCard.component.scss';
import { IMovie } from '../App.component';

export interface IMovieCardProps {
    handleMovieCardClick: (title: string) => void;
    movie: IMovie;
}

export function MovieCard(props: IMovieCardProps)  {
    return (
        <ul className="movie-card" onClick={props.handleMovieCardClick.bind(this, props.movie.title)}>
            <li><img src={props.movie.poster_path} width="250px" alt="{props.title}" draggable={false} /></li>
            <li className="title-date">
                <span className="title">{props.movie.title}</span>
                <span className="date">{props.movie.release_date.split('-')[0]}</span>
            </li>
            <li className="genres">{props.movie.genres.join(' & ')}</li>
        </ul>
    );
}
