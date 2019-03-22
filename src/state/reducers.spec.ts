import movies from './__fixtures__/movies';
import * as actions from './actions';
import reducer from './reducers';

test('reducer for searchByAction should works as expected', () => {
    let state: any = { searchBy: null };
    state = reducer(state, actions.searchByAction('value'));
    expect(state).toEqual({ searchBy: 'value' });
});

test('reducer for sortByAction should works as expected', () => {
    let state: any = { sortBy: null };
    state = reducer(state, actions.sortByAction('value'));
    expect(state).toEqual({ sortBy: 'value' });
});

test('reducer for showSearchAction should works as expected', () => {
    const prevMovies = movies;
    let state: any = { selectedMovie: movies[0], movies: [], prevMovies };
    state = reducer(state, actions.showSearchAction());
    expect(state).toEqual({ selectedMovie: null, movies: prevMovies, prevMovies: [] });
});

test('reducer for showDetailsAction should works as expected', () => {
    let state: any = { selectedMovie: null, prevMovies: null, movies };
    state = reducer(state, actions.showDetailsAction(movies[0]));
    expect(state).toEqual({ selectedMovie: movies[0], prevMovies: movies, movies: [] });
});

test('reducer for fetchMoviesAction.request should works as expected', () => {
    let state: any = { search: null };
    state = reducer(state, actions.fetchMoviesAction.request('value'));
    expect(state).toEqual({ search: 'value' });
});
