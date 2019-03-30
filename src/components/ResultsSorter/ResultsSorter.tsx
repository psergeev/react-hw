import * as React from 'react';
import SortByButton from '../SortByButton';
import './ResultsSorter.scss';

interface Props {
    moviesCount: number;
    sortBy: string;
    handleSortByChange: (value: string) => void;
}

export default React.memo(({ moviesCount, sortBy, handleSortByChange }: Props) => (
    <div className="results-sorter">
        <div className={!moviesCount ? 'hidden' : ''}>
            <div>{`${moviesCount} movie(s) found`}</div>
            <div>
                <span>Sort by</span>
                <SortByButton
                    value="release date"
                    selected={sortBy === 'release date'}
                    handleSortByClick={handleSortByChange}
                />

                <SortByButton
                    value="rating"
                    selected={sortBy === 'rating'}
                    handleSortByClick={handleSortByChange}
                />
            </div>
        </div>
    </div>
));
