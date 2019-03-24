import * as React from 'react';
import * as renderer from 'react-test-renderer';
import movies from './__fixtures__/movies';
import BodyWithResults from './BodyWithResults';

jest.mock('../ResultsSorter', () => 'ResultsSorter');
jest.mock('../ResultsDescription', () => 'ResultsDescription');
jest.mock('../MovieCard', () => 'MovieCard');

test('BodyWithResults component works as expected', () => {
    const component = renderer.create(
        <BodyWithResults
            handleMovieCardClick={jest.fn()}
            genre="Fiction"
            movies={movies}
            isEmpty
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('BodyWithResults component shows ResultsSorter without genre', () => {
    const component = renderer.create(
        <BodyWithResults
            handleMovieCardClick={jest.fn()}
            genre=""
            movies={movies}
            isEmpty
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
