import { shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { App, Movie } from './App';

jest.mock('./components/HeaderWithDetails', () => 'HeaderWithDetails');
jest.mock('./components/HeaderWithSearch', () => 'HeaderWithSearch');
jest.mock('./components/BodyWithResults', () => 'BodyWithResults');
jest.mock('./components/Footer', () => 'Footer');

test('App component works as expected', () => {
    const component = renderer.create(
        <App />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('App component should show header with details', () => {
    const component = shallow(<App />);
    const movies: Movie[] = component.state('movies');

    component.setState({
        selectedMovie: movies[0]
    });

    expect(component).toMatchSnapshot();
});

test('App component should go back from the description to search', () => {
    const component = shallow(<App />);
    const movies: Movie[] = component.state('movies');

    component.setState({
        selectedMovie: movies[0]
    });

    (component.instance() as App).handleBackToSearchClick();

    expect(component.find('HeaderWithSearch').length).toBe(1);
});

test('App component should show movie details on card click', () => {
    const component = shallow(<App />);
    const movies: Movie[] = component.state('movies');

    (component.instance() as App).handleMovieCardClick(movies[0].title);

    expect(component.find('HeaderWithDetails').length).toBe(1);
});

test('App component should catch js errors', () => {
    const component = shallow(<App />);

    component.setState({
        hasError: true
    });

    expect(component).toMatchSnapshot();
});

describe('First Test', () => {
    it('is working', () => {
        expect(true).toBe(true);
    });
});
