import * as React from 'react';
import * as ReactDom from 'react-dom';
import { connect, Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import App from './App';
import { fetchMoviesAction, showDetailsAction } from './state/actions';
import epics from './state/epics';
import reducer, { State } from './state/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    ));

const persistor = persistStore(store);
epicMiddleware.run(epics);

const mapStateToProps = (state: State) => ({
    selectedMovie: state.selectedMovie,
    movies: state.movies
});

const AppConnectedToState = connect(
    mapStateToProps,
    {
        onMovieCardClick: showDetailsAction,
        getMovies: fetchMoviesAction.request,
    }
)(App);


ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppConnectedToState />
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);
