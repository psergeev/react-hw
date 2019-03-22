import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import PageNotFound from './components/PageNotFound/PageNotFound';
import './polyfills';
import { persistor, store } from './state/store';

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <Switch>
                    <Route path="/(|search|film)" render={props => <App key={props.location.key} />} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('app')
);
