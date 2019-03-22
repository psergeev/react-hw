import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BodyWithResults from '../BodyWithResults';
import Footer from '../Footer';
import HeaderWithDetails from '../HeaderWithDetails';
import HeaderWithSearch from '../HeaderWithSearch';
import './App.scss';

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
    handleMovieCardClick: (movie: Movie) => void;
}

interface State {
    hasError: boolean;
}

export default class extends React.PureComponent<Props, State> {
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
        const selectedMovie = this.props.movies.find(movie => movie.title === title);

        if (selectedMovie) {
            this.props.handleMovieCardClick(selectedMovie);
        }
    }

    public render() {
        if (this.state.hasError) {
            return <h1>Something went wrong with js code.</h1>;
        }

        return (
            <main>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HeaderWithSearch} />
                        <Route path="/search/:typedText" component={HeaderWithSearch} />
                        <Route path="/film/:id" component={HeaderWithDetails} />
                    </Switch>
                </Router>

                <BodyWithResults
                    genre={(this.props.selectedMovie && this.props.selectedMovie.genres.join(' & ')) as string}
                    movies={this.props.movies}
                    handleMovieCardClick={this.handleMovieCardClick}
                />
                <Footer />
            </main>
        );
    }
}
