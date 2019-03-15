import * as React from 'react';
import * as renderer from 'react-test-renderer';
import HeaderWithDetails from './HeaderWithDetails';
import movie from './__fixtures__/movie';

jest.mock('../VoteMark', () => 'VoteMark');

test('HeaderWithDetails component works as expected', () => {
    const component = renderer.create(
        <HeaderWithDetails
            onBackToSearchClick={jest.fn()}
            movie={movie}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
