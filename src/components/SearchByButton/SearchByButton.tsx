import { Button, WithStyles } from '@material-ui/core';
import * as React from 'react';

interface Props {
    value: string;
    selected: boolean;
    handleSearchByClick: (value: string) => void;
}

type PropsWithStyles = Props & WithStyles<'button' | 'selected'>;

export default React.memo(({ value, selected, handleSearchByClick, classes }: PropsWithStyles) => {
    const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();

        return handleSearchByClick(value);
    };

    return (
        <Button
            onClick={onClick}
            color="primary"
            className={`${classes.button} ${(selected ? classes.selected : '')}`}
        >
            {value}
        </Button>
    );
});
