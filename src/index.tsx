import * as React from 'react';
import 'react-app-polyfill/ie11';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './polyfills';
import Root from './components/Root';
import configureStore from './state/store';

const { store } = configureStore(window && window.PRELOADED_STATE);

hydrate(
    <Root
        context={null}
        location={null}
        Router={BrowserRouter}
        store={store}
    />,
    document.getElementById('app')
);
