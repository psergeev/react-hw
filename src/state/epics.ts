import { combineEpics, Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { ActionType, isActionOf } from 'typesafe-actions';
import { Movie } from '../components/App/App';
import api from '../shared/services/Api';

import * as actions from './actions';
import { State } from './reducers';

type Action = ActionType<typeof actions>;

const moviesGetEpic: Epic<Action, Action, State> =
    (action$, state$) => (
        action$.pipe(
            filter(isActionOf(actions.fetchMoviesAction.request)),
            switchMap(action => (
                from(api.getMovies(action.payload, state$.value.searchBy, state$.value.sortBy))
                    .pipe(
                        map((movies: Movie[]) => actions.fetchMoviesAction.success(movies)),
                        catchError(error => of(actions.fetchMoviesAction.failure(error)))
                    )
            ))
        ));


const searchSimilar: Epic<Action, Action, State> =
    (action$, state$) => (
        action$.pipe(
            filter(isActionOf(actions.showDetailsAction)),
            switchMap((action) => (
                of(state$.value.prevMovies).pipe(
                    map((movies: Movie[]) => actions.fetchMoviesAction.success(movies.filter(movie => {
                        return (movie.genres.sort().toString() === action.payload.genres.sort().toString()
                            && movie.id !== action.payload.id);
                    })))
                )
            ))
        ));

export default combineEpics(moviesGetEpic, searchSimilar);
