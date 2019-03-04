import * as React from 'react';
import './Pure.component.css';

export class PureComponent extends React.PureComponent {
    public render() {
        return <h2 className="pure-component">Hello from Pure component</h2>;
    }
}
