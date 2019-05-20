import { MuiThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import loadable from '@loadable/component';
import { Route, Switch } from 'react-router-dom';
import BodyWithResults from '../BodyWithResults';
import Footer from '../Footer';
import './App.scss';
import theme from './App.theme';

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
    Router: any;
    location: string;
}

interface State {
    hasError: boolean;
}

const AsyncHeaderWithSearch = loadable(() => import('../HeaderWithSearch'));
const AsyncHeaderWithDetails = loadable(() => import('../HeaderWithDetails'));

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

        const { Router } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <main>
                    <Router location={this.props.location}>
                        <Switch>
                            <Route path="/search/:typedText" component={AsyncHeaderWithSearch} />
                            <Route path="/film/:id" component={AsyncHeaderWithDetails} />
                            <Route path="/" component={AsyncHeaderWithSearch} />
                        </Switch>
                    </Router>

                    <BodyWithResults
                        genre={(this.props.selectedMovie && this.props.selectedMovie.genres.join(' & ')) as string}
                        movies={this.props.movies}
                        handleMovieCardClick={this.handleMovieCardClick}
                    />
                    <Footer />
                </main>
            </MuiThemeProvider>
        );
    }
}
