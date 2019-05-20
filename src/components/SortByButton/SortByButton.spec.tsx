import classes from 'identity-obj-proxy';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SortByButton from './SortByButton';

test('SortByButton component works as expected', () => {
    const component = renderer.create(
        <SortByButton
            classes={classes}
            value="value"
            selected={false}
            handleSortByClick={jest.fn()}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('SortByButton component can be selected', () => {
    const component = renderer.create(
        <SortByButton
            classes={classes}
            value="value"
            selected
            handleSortByClick={jest.fn()}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
