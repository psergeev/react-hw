import { Button, withStyles, WithStyles } from '@material-ui/core';
import * as React from 'react';
import styles from './SortByButton.styles';

export interface Props {
    value: string;
    selected: boolean;
    handleSortByClick: (value: string) => void;
}

type PropsWithStyles = Props & WithStyles<'button' | 'selected'>;

function SortByButton({ value, selected, handleSortByClick, classes }: PropsWithStyles) {
    const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        return handleSortByClick(value);
    };

    return (
        <Button
            href="#"
            onClick={onClick}
            className={`${classes.button} ${(selected ? classes.selected : '')}`}
        >
            {value}
        </Button>
    );
}

export default React.memo(withStyles(styles)(SortByButton));
