import { shallow } from 'enzyme';
import * as React from 'react';
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
