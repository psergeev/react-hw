import * as React from 'react';
import './ResultsSorter.component.scss';
import { SortByButton } from '../sort-by-button/SortByButton.component';

export interface IResultsSorterProps {
    moviesCount: number;
}

export interface IResultsSorterState {
    sortBy: string;
}

export class ResultsSorter extends React.PureComponent<IResultsSorterProps, IResultsSorterState> {
    constructor(props: IResultsSorterProps) {
        super(props);

        this.state = {
            sortBy: 'rating'
        };

        this._handleSortByClick = this._handleSortByClick.bind(this);
    }

    public render() {
        return (
            <div className="results-sorter">
                <div>{this.props.moviesCount} movie(s) found</div>
                <div>
                    <span>Sort by</span>
                    <SortByButton value="release date"
                                  selected={this.state.sortBy === 'release date'}
                                  handleSortByClick={this._handleSortByClick} />

                    <SortByButton value="rating"
                                  selected={this.state.sortBy === 'rating'}
                                  handleSortByClick={this._handleSortByClick} />
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
