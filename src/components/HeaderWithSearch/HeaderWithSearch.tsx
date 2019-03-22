import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SearchByButton from '../SearchByButton';
import './HeaderWithSearch.scss';

interface MatchParams {
    typedText: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    searchBy: string;
    sortBy: string;
    search: string;
    handleSearchByChange: (value: string) => void;
    handleSearchClick: (value: string) => void;
}

interface State {
    textTyped: string;
}

export default class extends React.PureComponent<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            textTyped: props.match.params.typedText || props.search || ''
        };

        this._handleKeyPress = this._handleKeyPress.bind(this);
        this._handleSearch = this._handleSearch.bind(this);
        this._onSearchButtonClick = this._onSearchButtonClick.bind(this);
    }

    public componentDidMount() {
        if (this.props.match.params.typedText) {
            this._handleSearch(this.props.match.params.typedText);
        }
    }

    public componentDidUpdate(prevProps: Props) {
        if (this.props.sortBy !== prevProps.sortBy) {
            this._handleSearch(this.props.search);
        }

        if (this.props.match.params.typedText !== prevProps.match.params.typedText) {
            this._handleSearch(this.props.match.params.typedText);
        }
    }

    private _handleKeyPress(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            textTyped: (event.target as any).value
        });
    }

    private _handleSearch(search: string) {
        if (search.length) {
            this.props.handleSearchClick(search);
        }
    }

    private _onSearchButtonClick() {
        if (this.state.textTyped.length) {
            this.props.history.push(`/search/${this.state.textTyped}`);
        }
    }

    public render() {
        return (
            <header>
                <h1 className="title">netflixroulette</h1>
                <p className="find-text">find your movie</p>
                <div className="search-input">
                    <input
                        value={this.state.textTyped}
                        onChange={this._handleKeyPress}
                    />
                </div>
                <div className="search-controls">
                    <div className="search-by">
                        <span>Search by</span>

                        <SearchByButton
                            value="title"
                            selected={this.props.searchBy === 'title'}
                            handleSearchByClick={this.props.handleSearchByChange}
                        />

                        <SearchByButton
                            value="genres"
                            selected={this.props.searchBy === 'genres'}
                            handleSearchByClick={this.props.handleSearchByChange}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={this._onSearchButtonClick}
                        disabled={this.state.textTyped.length === 0}
                        className={`${(this.state.textTyped.length === 0 ? 'disabled' : '')}`}
                    >
                        Search
                    </button>
                </div>
            </header>
        );
    }
}
