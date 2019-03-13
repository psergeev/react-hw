import * as React from 'react';
import * as renderer from 'react-test-renderer';
import VoteMark from '.';

test('VoteMark component works as expected', () => {
    const component = renderer.create(
        <VoteMark vote={7.6} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
