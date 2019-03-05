import * as React from 'react';
import './SearchByButton.component.scss';

export interface ISearchByButtonProps {
    value: string;
    selected: boolean;
    handleSearchByClick: any;
}

export const SearchByButton = React.memo((props: ISearchByButtonProps) => {
    const handleSearchByClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        return props.handleSearchByClick(props.value);
    };

    return (
        <a href="#"
           onClick={handleSearchByClick}
           className={'search-by-button ' +
           (props.selected ? 'selected' : '')}>{props.value}</a>
    );
});
