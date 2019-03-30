import * as React from 'react';
import './SortByButton.scss';

export interface Props {
    value: string;
    selected: boolean;
    handleSortByClick: (value: string) => void;
}

export default React.memo(({ value, selected, handleSortByClick }: Props) => {
    const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        return handleSortByClick(value);
    };

    return (
        <a
            href="#"
            onClick={onClick}
            className={`sort-by-button ${(selected ? 'selected' : '')}`}
        >
            {value}
        </a>
    );
});
