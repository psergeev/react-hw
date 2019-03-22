import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PageNotFound from '.';

test('PageNotFound component works as expected', () => {
    const component = renderer.create(
        <PageNotFound />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
