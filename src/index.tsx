import { loadableReady } from '@loadable/component';
import * as React from 'react';
import 'react-app-polyfill/ie11';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import './polyfills';
import configureStore from './state/store';

const { store } = configureStore(window && window.PRELOADED_STATE);

loadableReady(() => {
    hydrate(
        <Root
            context={null}
            location={null}
            Router={BrowserRouter}
            store={store}
        />,
        document.getElementById('app')
    );
});
