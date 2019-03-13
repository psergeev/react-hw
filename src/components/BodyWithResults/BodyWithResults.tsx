import * as React from 'react';
import { Movie } from '../App';
import MovieCard from '../MovieCard';
import ResultsDescription from '../ResultsDescription';
import ResultsSorter from '../ResultsSorter';
import './BodyWithResults.scss';

interface Props {
    movies: Movie[];
    handleMovieCardClick: (title: string) => void;
    genre: string;
}

export default React.memo((props: Props) => {
    const movieCards = props.movies.map(movie => (
        <MovieCard
            handleMovieCardClick={props.handleMovieCardClick}
            movie={movie}
            key={movie.title}
        />
    ));

    return (
        <section className="results">
            {props.genre ? <ResultsDescription genre={props.genre} /> :
                <ResultsSorter moviesCount={props.movies.length} />}

            <div className="results-list">
                {movieCards}
            </div>
            { /* <h2 className="results-not-found">No films found</h2> */}
        </section>
    );
});