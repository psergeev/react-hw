import { shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import HeaderWithSearch from './HeaderWithSearch';

jest.mock('../SearchByButton', () => 'SearchByButton');

const props = {
    searchBy: 'title',
    sortBy: 'rating',
    search: '',
    handleSearchByChange: jest.fn(),
    handleSearchClick: jest.fn(),
};

test('HeaderWithSearch component works as expected', () => {
    const component = renderer.create(
        <HeaderWithSearch {...props} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('HeaderWithSearch should switch search by button', () => {
    const component = shallow(<HeaderWithSearch {...props} searchBy="genre" />);

    expect(component).toMatchSnapshot();
});


test('HeaderWithSearch should show typed text', () => {
    const component = shallow(<HeaderWithSearch {...props} />);

    component.setState({
        textTyped: '123'
    });

    expect(component).toMatchSnapshot();
});
