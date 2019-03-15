import { shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from './App';
import movies from './state/__fixtures__/movies';

jest.mock('./components/HeaderWithDetails', () => 'HeaderWithDetails');
jest.mock('./components/HeaderWithSearch', () => 'HeaderWithSearch');
jest.mock('./components/BodyWithResults', () => 'BodyWithResults');
jest.mock('./components/Footer', () => 'Footer');

const props = {
    movies: [],
    selectedMovie: null,
    onBackToSearchClick: jest.fn(),
    onMovieCardClick: jest.fn(),
    getMovies: jest.fn()
};

test('App component works as expected', () => {
    const component = renderer.create(
        <App {...props} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('App component should show header with details', () => {
    const component = shallow(<App {...props} />);

    component.setProps({
        selectedMovie: { genres: [] }
    });

    expect(component).toMatchSnapshot();
});

test('App component should go back from the description to search', () => {
    const component = shallow(<App {...props} />);

    component.setProps({
        selectedMovie: { genres: [] }
    });

    expect(component.find('HeaderWithDetails').length).toBe(1);

    component.setProps({
        selectedMovie: null
    });

    expect(component.find('HeaderWithSearch').length).toBe(1);
});

test('App component should catch js errors', () => {
    const component = shallow(<App {...props} />);

    component.setState({
        hasError: true
    });

    expect(component).toMatchSnapshot();
});
