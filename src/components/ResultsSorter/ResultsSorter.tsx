import * as React from 'react';
import SortByButton from '../SortByButton';
import './ResultsSorter.scss';

interface Props {
    moviesCount: number;
    sortBy: string;
    onSortByChange: Function;
}

export default React.memo((props: Props) => (
    <div className="results-sorter">
        <div className={!props.moviesCount ? 'hidden' : ''}>
            <div>{`${props.moviesCount} movie(s) found`}</div>
            <div>
                <span>Sort by</span>
                <SortByButton
                    value="release date"
                    selected={props.sortBy === 'release date'}
                    handleSortByClick={props.onSortByChange}
                />

                <SortByButton
                    value="rating"
                    selected={props.sortBy === 'rating'}
                    handleSortByClick={props.onSortByChange}
                />
            </div>
        </div>
    </div>
));
