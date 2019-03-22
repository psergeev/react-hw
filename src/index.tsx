import 'react-app-polyfill/ie11';
import './polyfills';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import { persistor, store } from './state/store';

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);
