import * as React from 'react';
import * as renderer from 'react-test-renderer';
import movie from './__fixtures__/movie';
import HeaderWithDetails from './HeaderWithDetails';

jest.mock('../VoteMark', () => 'VoteMark');
const routeComponentProps = {
    history: {},
    location: {},
    match: {},
} as any;

test('HeaderWithDetails component works as expected', () => {
    const component = renderer.create(
        <HeaderWithDetails
            {...routeComponentProps}
            handleBackToSearchClick={jest.fn()}
            fetchMovie={jest.fn()}
            search="123"
            movie={movie}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
