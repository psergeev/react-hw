import * as React from 'react';
import './HeaderWithSearch.scss';
import SearchByButton from '../SearchByButton';

interface State {
    textTyped: string;
    searchBy: string;
}

export default class extends React.PureComponent<{}, State> {
    public constructor(props: {}) {
        super(props);

        this.state = {
            textTyped: '',
            searchBy: 'title'
        };

        this._handleKeyPress = this._handleKeyPress.bind(this);
        this._handleSearchByClick = this._handleSearchByClick.bind(this);
    }

    private _handleSearchByClick(value: string) {
        this.setState({
            searchBy: value
        });
    }

    private _handleKeyPress(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            textTyped: (event.target as any).value
        });
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
                            selected={this.state.searchBy === 'title'}
                            handleSearchByClick={this._handleSearchByClick}
                        />

                        <SearchByButton
                            value="genre"
                            selected={this.state.searchBy === 'genre'}
                            handleSearchByClick={this._handleSearchByClick}
                        />
                    </div>

                    <button type="button">Search</button>
                </div>
            </header>
        );
    }
}
