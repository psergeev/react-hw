import { shallow } from 'enzyme';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import App from './App';

jest.mock('./../HeaderWithDetails', () => 'HeaderWithDetails');
jest.mock('./../HeaderWithSearch', () => 'HeaderWithSearch');
jest.mock('./../BodyWithResults', () => 'BodyWithResults');
jest.mock('./../Footer', () => 'Footer');

const props = {
    movies: [],
    selectedMovie: null,
    handleMovieCardClick: jest.fn(),
    Router: BrowserRouter,
    location: null
};

test('App component works as expected', () => {
    const component = renderer.create(
        <App {...props} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('App component should catch js errors', () => {
    const component = shallow(<App {...props} />);

    component.setState({
        hasError: true
    });

    expect(component).toMatchSnapshot();
});
