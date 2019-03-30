import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import PageNotFound from '../PageNotFound/PageNotFound';

interface Props {
    Router: any;
    location: string | null;
    context: {};
    store: any;
}

export default ({ Router, location, context, store }: Props) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <Switch>
                <Route path="/(|search|film)" render={props => <App key={props.location.key} Router={Router} location={location} />} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    </Provider>
);
