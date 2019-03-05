import * as React from 'react';
import './SortByButton.component.scss';

export interface ISortByButtonProps {
    value: string;
    selected: boolean;
    handleSortByClick: any;
}

export function SortByButton(props: ISortByButtonProps) {
    const handleSearchByClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        return props.handleSortByClick(props.value);
    };

    return (
        <a href="#"
           onClick={handleSearchByClick}
           className={'sort-by-button ' +
           (props.selected ? 'selected' : '')}>{props.value}</a>
    );
}
