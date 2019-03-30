import { ActionType, getType } from 'typesafe-actions';
import { DeepReadonly } from 'utility-types';
import { Movie } from '../components/App/App';
import * as actions from './actions';

export type State = DeepReadonly<{
    isEmpty: boolean;
    movies: Movie[];
    prevMovies: Movie[];
    searchBy: string;
    sortBy: string;
    selectedMovie: Movie | null;
    search: string;
}>

export const initialState: State = {
    prevMovies: [],
    movies: [],
    isEmpty: true,
    search: '',
    searchBy: 'title',
    sortBy: 'rating',
    selectedMovie: null
};

export type Action = ActionType<typeof actions>;

export default function (state = initialState, action: Action) {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case getType(actions.searchByAction):
            return { ...state, searchBy: action.payload };
        case getType(actions.sortByAction):
            return { ...state, sortBy: action.payload };
        case getType(actions.showSearchAction):
            return {
                ...state,
                selectedMovie: action.payload,
                movies: [...state.prevMovies],
                prevMovies: []
            };
        case getType(actions.showDetailsAction):
            return {
                ...state,
                selectedMovie: action.payload,
                prevMovies: [...state.movies],
                movies: []
            };
        case getType(actions.fetchMoviesAction.success):
            return { ...state, movies: action.payload, isEmpty: false };
        case getType(actions.fetchMoviesAction.request):
            return { ...state, search: action.payload };

        case getType(actions.fetchMovieAction.request):
            return {
                ...state,
                prevMovies: [...state.movies],
                movies: []
            };

        case getType(actions.fetchMovieAction.success):
            return { ...state, selectedMovie: action.payload };

        default:
            return state;
    }
}
