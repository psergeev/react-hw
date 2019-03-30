import * as React from 'react';
import './SearchByButton.scss';

interface Props {
    value: string;
    selected: boolean;
    handleSearchByClick: (value: string) => void;
}

export default React.memo(({ value, selected, handleSearchByClick }: Props) => {
    const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        return handleSearchByClick(value);
    };

    return (
        <a
            href="#"
            onClick={onClick}
            className={`search-by-button ${(selected ? 'selected' : '')}`}
        >
            {value}
        </a>
    );
});
