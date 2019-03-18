import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SearchByButton from '.';

test('SearchByButton component works as expected', () => {
    const component = renderer.create(
        <SearchByButton
            value="value"
            selected={false}
            handleSearchByClick={jest.fn()}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('SearchByButton component can be selected', () => {
    const component = renderer.create(
        <SearchByButton
            value="value"
            selected
            handleSearchByClick={jest.fn()}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
