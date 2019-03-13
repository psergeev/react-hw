import * as React from 'react';
import './SortByButton.scss';

export interface Props {
    value: string;
    selected: boolean;
    handleSortByClick: any;
}

export default React.memo((props: Props) => {
    const handleSearchByClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        return props.handleSortByClick(props.value);
    };

    return (
        <a
            href="#"
            onClick={handleSearchByClick}
            className={`sort-by-button ${(props.selected ? 'selected' : '')}`}
        >
            {props.value}
        </a>
    );
});
