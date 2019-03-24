import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ResultsDescription from './ResultsDescription';

test('ResultsDescription component works as expected', () => {
    const component = renderer.create(
        <ResultsDescription
            genre="Fiction"
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
