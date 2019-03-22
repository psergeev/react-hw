import { shallow } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ResultsSorter from './ResultsSorter';

jest.mock('../SortByButton', () => 'SortByButton');

const props = {
    moviesCount: 10,
    sortBy: 'rating',
    handleSortByChange: jest.fn(),
};

test('ResultsSorter component works as expected', () => {
    const component = renderer.create(
        <ResultsSorter
            {...props}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('ResultsSorter should switch sort by button', () => {
    const component = shallow(<ResultsSorter {...props} sortBy="release date" />);

    expect(component).toMatchSnapshot();
});
