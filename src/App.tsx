import * as React from 'react';
import './App.scss';
import BodyWithResults from './components/BodyWithResults';
import Footer from './components/Footer';
import HeaderWithDetails from './components/HeaderWithDetails';
import HeaderWithSearch from './components/HeaderWithSearch';

export interface Movie {
    id: number;
    poster_path: string;
    title: string;
    tagline: string;
    release_date: string;
    vote_average: number;
    runtime: number;
    overview: string;
    genres: string[];
}

interface Props {
    movies: Movie[];
    selectedMovie: Movie | null;
    onBackToSearchClick: any;
    onMovieCardClick: any;
    getMovies: any;
}

interface AppState {
    hasError: boolean;
}

export default class extends React.PureComponent<Props, AppState> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            hasError: false
        };

        this.handleMovieCardClick = this.handleMovieCardClick.bind(this);
    }

    public componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }

    public handleMovieCardClick(title: string) {
        const selectedMovie = this.props.movies.find(movie => movie.title === title) || null;

        this.props.onMovieCardClick(selectedMovie);
    }

    private _getHeaderComponent() {
        if (this.props.selectedMovie) {
            return (
                <HeaderWithDetails
                    movie={this.props.selectedMovie}
                />
            );
        }

        return <HeaderWithSearch />;
    }

    public render() {
        if (this.state.hasError) {
            return <h1>Something went wrong with js code.</h1>;
        }

        return (
            <main>
                {this._getHeaderComponent()}
                <BodyWithResults
                    handleMovieCardClick={this.handleMovieCardClick}
                    genre={(this.props.selectedMovie && this.props.selectedMovie.genres.join(' & ')) as string}
                    movies={this.props.movies}
                />
                <Footer />
            </main>
        );
    }
}
