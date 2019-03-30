import { createAction, createAsyncAction } from 'typesafe-actions';
import { Movie } from '../components/App/App';

export const searchByAction = createAction('SEARCH_BY_REQUESTED', action => (
    (value: string) => action(value)
));

export const sortByAction = createAction('SORT_BY_REQUESTED', action => (
    (value: string) => action(value)
));

export const showDetailsAction = createAction('SHOW_DETAILS_REQUESTED', action => (
    (movie: Movie) => action(movie)
));

export const showSearchAction = createAction('SHOW_SEARCH_FORM_REQUESTED', action => (
    () => action(null)
));

export const fetchMoviesAction = createAsyncAction(
    'FETCH_MOVIES_REQUEST',
    'FETCH_MOVIES_SUCCESS',
    'FETCH_MOVIES_FAILURE'
)<string, Movie[], Error>();


export const fetchMovieAction = createAsyncAction(
    'FETCH_MOVIE_REQUEST',
    'FETCH_MOVIE_SUCCESS',
    'FETCH_MOVIE_FAILURE'
)<string, Movie, Error>();
