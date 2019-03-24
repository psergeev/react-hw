import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieCard from './MovieCard';
import movie from './__fixtures__/movie';


test('MovieCard component works as expected', () => {
    const component = renderer.create(
        <MovieCard
            handleMovieCardClick={jest.fn()}
            movie={movie}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
