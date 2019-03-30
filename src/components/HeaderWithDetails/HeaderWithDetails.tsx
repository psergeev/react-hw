import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Movie } from '../App/App';
import VoteMark from '../VoteMark';
import './HeaderWithDetails.scss';

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    movie: Movie | null;
    handleBackToSearchClick: () => void;
    fetchMovie: (id: string) => void;
    search: string;
}

export default class extends React.PureComponent<Props, {}> {
    public constructor(props: Props) {
        super(props);

        this._handleBackToSearchClick = this._handleBackToSearchClick.bind(this);
    }

    public componentDidMount() {
        if (!this.props.movie) {
            this.props.fetchMovie(this.props.match.params.id);
        }
    }

    private _handleBackToSearchClick() {
        this.props.history.push(`/search/${this.props.search}`);
        this.props.handleBackToSearchClick();
    }

    public render() {
        if (this.props.movie) {
            return (
                <header>
                    <div className="top-line">
                        <h1 className="title">netflixroulette</h1>
                        <button type="button" onClick={this._handleBackToSearchClick}>BACK TO SEARCH</button>
                    </div>
                    <div className="details-line">
                        <img src={this.props.movie.poster_path} alt={this.props.movie.title} />
                        <ul className="details">
                            <li>
                                <span className="title">{this.props.movie.title}</span>
                                <VoteMark vote={this.props.movie.vote_average} />
                            </li>
                            <li className="tagline">{this.props.movie.tagline}</li>
                            <li>
                                <span className="release-date">{this.props.movie.release_date.split('-')[0]}</span>
                                <span className="runtime">{`${this.props.movie.runtime} min`}</span>
                            </li>
                            <li className="overview">{this.props.movie.overview}</li>
                        </ul>
                    </div>
                </header>
            );
        }

        return <header>loading</header>;
    }
}
