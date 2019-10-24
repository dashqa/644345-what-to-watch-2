import React from 'react';
import renderer from 'react-test-renderer';
import TopPage from './top-page';

it(`Top page correctly renders after relaunch`, () => {
  const tree = renderer.create(<TopPage/>).toJSON();
  expect(tree).toMatchSnapshot();
});
