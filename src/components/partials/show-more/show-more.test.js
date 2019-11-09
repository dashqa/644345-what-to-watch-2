import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from './show-more';

const props = {
  onClick: () => {}
};

it(`Show more correctly renders after relaunch`, () => {
  const tree = renderer.create(<ShowMore {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
