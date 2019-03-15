import * as React from 'react';
import SearchByButton from '../SearchByButton';
import './HeaderWithSearch.scss';

interface Props {
    searchBy: string;
    sortBy: string;
    search: string;
    onSearchByChange: Function;
    onSearchClick: Function;
}

interface State {
    textTyped: string;
}

export default class extends React.PureComponent<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            textTyped: props.search || ''
        };

        this._handleKeyPress = this._handleKeyPress.bind(this);
        this._handleSearchClick = this._handleSearchClick.bind(this);
    }

    public componentDidUpdate(prevProps: Props) {
        if (this.props.sortBy !== prevProps.sortBy) {
            this._handleSearchClick();
        }
    }

    private _handleKeyPress(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            textTyped: (event.target as any).value
        });
    }

    private _handleSearchClick() {
        if (this.state.textTyped.length) {
            this.props.onSearchClick({
                search: this.state.textTyped,
                searchBy: this.props.searchBy,
                sortBy: this.props.sortBy === 'rating' ? 'vote_average' : 'release_date'
            });
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
                            handleSearchByClick={this.props.onSearchByChange}
                        />

                        <SearchByButton
                            value="genres"
                            selected={this.props.searchBy === 'genres'}
                            handleSearchByClick={this.props.onSearchByChange}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={this._handleSearchClick}
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
