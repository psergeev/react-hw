import classes from 'identity-obj-proxy';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieCard from './MovieCard';
import movie from './__fixtures__/movie';

const routeComponentProps = {
    history: {},
    location: {},
    match: {},
} as any;

test('MovieCard component works as expected', () => {
    const component = renderer.create(
        <MovieCard
            classes={classes}
            {...routeComponentProps}
            handleMovieCardClick={jest.fn()}
            movie={movie}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
