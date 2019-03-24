import movies from './__fixtures__/movies';
import * as actions from './actions';

test('searchByAction should works as expected', () => {
    const action = actions.searchByAction('value');
    expect(action).toEqual({ type: 'SEARCH_BY_REQUESTED', payload: 'value' });
});

test('sortByAction should works as expected', () => {
    const action = actions.sortByAction('value');
    expect(action).toEqual({ type: 'SORT_BY_REQUESTED', payload: 'value' });
});

test('showDetailsAction should works as expected', () => {
    const action = actions.showDetailsAction(movies[0]);
    expect(action).toEqual({ type: 'SHOW_DETAILS_REQUESTED', payload: movies[0] });
});

test('showSearchAction should works as expected', () => {
    const action = actions.showSearchAction();
    expect(action).toEqual({ type: 'SHOW_SEARCH_FORM_REQUESTED', payload: null });
});
