import * as React from 'react';
import SortByButton from '../SortByButton';
import './ResultsSorter.scss';

interface Props {
    moviesCount: number;
}

interface State {
    sortBy: string;
}

export default class extends React.PureComponent<Props, State> {
    public constructor(props: Props) {
        super(props);

        this.state = {
            sortBy: 'rating'
        };

        this._handleSortByClick = this._handleSortByClick.bind(this);
    }

    public render() {
        return (
            <div className="results-sorter">
                <div>{`${this.props.moviesCount} movie(s) found`}</div>
                <div>
                    <span>Sort by</span>
                    <SortByButton
                        value="release date"
                        selected={this.state.sortBy === 'release date'}
                        handleSortByClick={this._handleSortByClick}
                    />

                    <SortByButton
                        value="rating"
                        selected={this.state.sortBy === 'rating'}
                        handleSortByClick={this._handleSortByClick}
                    />
                </div>
            </div>
        );
    }

    private _handleSortByClick(value: string) {
        this.setState({
            sortBy: value
        });
    }
}
