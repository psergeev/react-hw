import { wrapRootEpic } from 'react-redux-epic';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import epics from './epics';
import reducer, { State } from './reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default (initialState?: State) => {
    const wrappedEpic = wrapRootEpic(epics);
    const epicMiddleware = createEpicMiddleware();

    const store = createStore(reducer,
        initialState,
        composeEnhancers(
            applyMiddleware(epicMiddleware)
        ));

    epicMiddleware.run(wrappedEpic);

    return { store, wrappedEpic };
};
