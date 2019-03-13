import * as React from 'react';
import * as renderer from 'react-test-renderer';
import BodyWithResults from '.';
import movies from './__fixtures__/movies';

jest.mock('../ResultsSorter', () => 'ResultsSorter');
jest.mock('../ResultsDescription', () => 'ResultsDescription');
jest.mock('../MovieCard', () => 'MovieCard');

test('BodyWithResults component works as expected', () => {
    const component = renderer.create(
        <BodyWithResults
            handleMovieCardClick={jest.fn()}
            genre="Fiction"
            movies={movies}
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
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
