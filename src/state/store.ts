import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import epics from './epics';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const epicMiddleware = createEpicMiddleware();


const store = createStore(persistedReducer,
    composeEnhancers(
        applyMiddleware(epicMiddleware)
    ));

const persistor = persistStore(store);

epicMiddleware.run(epics);

export { store, persistor };
