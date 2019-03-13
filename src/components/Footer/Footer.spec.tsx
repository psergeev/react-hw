import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Footer from '.';

test('Footer component works as expected', () => {
    const component = renderer.create(
        <Footer />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
