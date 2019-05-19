import { Card, WithStyles } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Movie } from '../App/App';
import movieCardStyles from './MovieCard.styles';

interface Props extends RouteComponentProps<any> {
    handleMovieCardClick: (title: string) => void;
    movie: Movie;
}

type PropsWithStyles = Props & WithStyles<'card' | 'media' | 'titleDate' | 'title' | 'date' | 'genres'>;

function MovieCard({ handleMovieCardClick, movie, history, classes }: PropsWithStyles) {
    const _handleMovieCardClick = () => {
        history.push(`/film/${movie.id}`);
        handleMovieCardClick(movie.title);
    };

    return (
        <Card
            className={classes.card}
            onClick={_handleMovieCardClick}
        >
            <CardMedia
                className={classes.media}
                image={movie.poster_path}
                title={movie.title}
            />
            <div className={classes.titleDate}>
                <span className={classes.title}>{movie.title}</span>
                <span className={classes.date}>{movie.release_date.split('-')[0]}</span>
            </div>
            <div className={classes.genres}>{movie.genres.join(' & ')}</div>
        </Card>
    );
}

export default React.memo(withStyles(movieCardStyles)(MovieCard));
