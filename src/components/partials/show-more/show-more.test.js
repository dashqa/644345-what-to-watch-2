import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from './show-more';

it(`Show more correctly renders after relaunch`, () => {
  const tree = renderer.create(<ShowMore/>).toJSON();
  expect(tree).toMatchSnapshot();
});
