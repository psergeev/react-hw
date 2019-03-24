import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import api from '../shared/services/Api';
import movies from './__fixtures__/movies';
import * as actions from './actions';
import epic from './epics';

test('moviesGetEpic should works for fetchMoviesAction.request action', (done) => {
    jest.spyOn(api, 'getMovies')
        .mockImplementation(() => of(movies));

    const action$ = ActionsObservable.of(
        actions.fetchMoviesAction.request('value')
    );

    const state = { value: { searchBy: '', sortBy: '' } };

    epic(action$, state)
        .subscribe((actual: any) => {
            expect(actual).toEqual({ payload: movies, type: 'FETCH_MOVIES_SUCCESS' });
            done();
        });
});

test('searchSimilar should works for showDetailsAction action', (done) => {
    const action$ = ActionsObservable.of(
        actions.showDetailsAction(movies[0])
    );

    const state = { value: { prevMovies: movies } };

    epic(action$, state)
        .subscribe((actual: any) => {
            expect(actual).toEqual({ payload: [state.value.prevMovies[2]], type: 'FETCH_MOVIES_SUCCESS' });
            done();
        });
});
