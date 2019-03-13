import { shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import HeaderWithSearch from '.';

jest.mock('../SearchByButton', () => 'SearchByButton');

test('HeaderWithSearch component works as expected', () => {
    const component = renderer.create(
        <HeaderWithSearch />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('HeaderWithSearch should switch search by button', () => {
    const component = shallow(<HeaderWithSearch />);

    component.setState({
        searchBy: 'genre'
    });

    expect(component).toMatchSnapshot();
});


test('HeaderWithSearch should show typed text', () => {
    const component = shallow(<HeaderWithSearch />);

    component.setState({
        textTyped: '123'
    });

    expect(component).toMatchSnapshot();
});
