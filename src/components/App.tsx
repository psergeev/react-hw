import * as React from 'react';
import './App.scss';
import BodyWithResults from './BodyWithResults';
import Footer from './Footer';
import HeaderWithDetails from './HeaderWithDetails';
import HeaderWithSearch from './HeaderWithSearch';

export interface Movie {
    poster_path: string;
    title: string;
    tagline: string;
    release_date: string;
    vote_average: number;
    runtime: number;
    overview: string;
    genres: string[];
}

interface State {
    selectedMovie: Movie | null;
    movies: Movie[];
    hasError: boolean;
}

export class App extends React.PureComponent<{}, State> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            selectedMovie: null,
            movies: [],
            hasError: false
        };

        this.handleMovieCardClick = this.handleMovieCardClick.bind(this);
        this.handleBackToSearchClick = this.handleBackToSearchClick.bind(this);
    }

    public componentDidMount() {
        this._getMovies();
    }

    public componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }

    public handleMovieCardClick(title: string) {
        this.setState(prevState => ({
            selectedMovie: prevState.movies.find(movie => movie.title === title) || null
        }));
    }

    public handleBackToSearchClick() {
        this.setState({ selectedMovie: null });
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
                    genre={(this.state.selectedMovie && this.state.selectedMovie.genres.join(' & ')) as string}
                    movies={this.state.movies}
                />
                <Footer />
            </main>
        );
    }

    private _getHeaderComponent() {
        if (this.state.selectedMovie) {
            return (
                <HeaderWithDetails
                    movie={this.state.selectedMovie}
                    handleBackToSearchClick={this.handleBackToSearchClick}
                />
            );
        }

        return <HeaderWithSearch />;
    }

    private _getMovies() {
        this.setState({
            movies: [{
                poster_path: 'https://image.tmdb.org/t/p/w500/97fNAi62HawGjWru7PvVmF7RAbU.jpg',
                title: 'Kill Bill: Vol. 1',
                tagline: 'Go for the kill.',
                release_date: '2003-10-10',
                vote_average: 7.8,
                runtime: 111,
                overview: 'An assassin is shot at the altar by her ruthless employer, ' +
                    'Bill and other members of their assassination circle – but \'The Bride\' ' +
                    'lives to plot her vengeance. Setting out for some payback, she makes a death ' +
                    'list and hunts down those who wronged her, saving Bill for last.',
                genres: [
                    'Action',
                    'Crime',
                ],
            }, {
                poster_path: 'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
                title: 'Kill Bill: Vol. 2',
                tagline: 'The bride is back for the final cut.',
                release_date: '2004-04-16',
                vote_average: 7.7,
                runtime: 136,
                overview: 'The Bride unwaveringly continues on her roaring rampage of revenge against ' +
                    'the band of assassins who had tried to kill her and her unborn child. She visits ' +
                    'each of her former associates one-by-one, checking off the victims on her Death List ' +
                    'Five until there\'s nothing left to do … but kill Bill.',
                genres: [
                    'Action',
                    'Crime',
                    'Thriller',
                ],
            }],
        });
    }
}
