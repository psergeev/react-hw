import React from 'react';
import renderer from 'react-test-renderer';
import { PureComponent } from './Pure.component';

test('Pure Component works as expected', () => {
    const component = renderer.create(
        <PureComponent/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});