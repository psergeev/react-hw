import * as React from 'react';
import './SearchByButton.scss';

interface Props {
    value: string;
    selected: boolean;
    handleSearchByClick: (value: string) => void;
}

export default React.memo((props: Props) => {
    const handleSearchByClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        return props.handleSearchByClick(props.value);
    };

    return (
        <a
            href="#"
            onClick={handleSearchByClick}
            className={`search-by-button ${(props.selected ? 'selected' : '')}`}
        >
            {props.value}
        </a>
    );
});
