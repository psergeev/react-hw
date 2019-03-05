import * as React from 'react';
import './BodyWithResults.component.scss';
import { ResultsSorter } from '../results-sorter/ResultsSorter.component';
import { ResultsDescription } from '../results-description/ResultsDescription.component';
import { MovieCard } from '../movie-card/MovieCard.component';
import { IMovie } from '../App.component';

export interface IBodyWithResultsProps {
    movies: IMovie[];
    handleMovieCardClick: (title: string) => void;
    genre: string;
}

export function BodyWithResults(props: IBodyWithResultsProps) {
    const movieCards = props.movies.map((movie) => {
        return <MovieCard handleMovieCardClick={props.handleMovieCardClick} movie={movie} key={movie.title} />;
    });

    return (
        <section className="results">
            {props.genre ? <ResultsDescription genre={props.genre} /> :
                <ResultsSorter moviesCount={props.movies.length} />}

            <div className="results-list">
                {movieCards}
            </div>
            {/*<h2 className="results-not-found">No films found</h2>*/}
        </section>
    );
}
