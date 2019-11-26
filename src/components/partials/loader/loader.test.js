import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './loader';

it(`Loader correctly renders after relaunch`, () => {
  const tree = renderer.create(<Loader/>).toJSON();
  expect(tree).toMatchSnapshot();
});
