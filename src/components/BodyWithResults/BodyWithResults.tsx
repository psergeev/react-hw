import * as React from 'react';
import { Movie } from '../App/App';
import MovieCard from '../MovieCard';
import ResultsDescription from '../ResultsDescription';
import ResultsSorter from '../ResultsSorter';
import './BodyWithResults.scss';

interface Props {
    movies: Movie[];
    handleMovieCardClick: (title: string) => void;
    genre: string;
    isEmpty: boolean;
}

export default React.memo(({ movies, handleMovieCardClick, genre, isEmpty }: Props) => {
    const movieCards = movies.map(movie => (
        <MovieCard
            movie={movie}
            handleMovieCardClick={handleMovieCardClick}
            key={movie.title}
        />
    ));

    const renderResultList = () => {
        if (!movies.length && !isEmpty) {
            return <h2 className="results-not-found">No films found</h2>;
        }

        if (!isEmpty) {
            return (
                <div className="results-list">
                    {movieCards}
                </div>
            );
        }

        return '';
    };

    return (
        <section className="results">
            {genre ? <ResultsDescription genre={genre} /> :
                <ResultsSorter moviesCount={movies.length} />}

            {renderResultList()}
        </section>
    );
});
