import { shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ResultsSorter from '.';

jest.mock('../SortByButton', () => 'SortByButton');

test('ResultsSorter component works as expected', () => {
    const component = renderer.create(
        <ResultsSorter
            moviesCount={10}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('ResultsSorter should switch sort by button', () => {
    const component = shallow(<ResultsSorter moviesCount={10} />);

    component.setState({
        sortBy: 'release date'
    });

    expect(component).toMatchSnapshot();
});
