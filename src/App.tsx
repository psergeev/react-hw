import * as React from 'react';
import {ComponentComponent} from './components/Component.component';
import {FunctionComponent} from './components/Function.component';
import {CreateElementComponent} from './components/CreateElement.component';
import {PureComponent} from './components/Pure.component';

export class App extends React.PureComponent {
    public render() {
        return (
            <main>
                <PureComponent/>
                <ComponentComponent/>
                <FunctionComponent/>
                <CreateElementComponent/>
            </main>
        );
    }
}
