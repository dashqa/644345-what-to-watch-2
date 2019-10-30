import React from 'react';
import renderer from 'react-test-renderer';
import TabDetails from './tab-details';

const props = {
  runTime: 0,
  genre: ``,
  released: 0,
  director: ``,
  starring: [],
};

it(`Details tab correctly renders after relaunch`, () => {
  const tree = renderer.create(<TabDetails {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
