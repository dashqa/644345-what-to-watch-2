import React from 'react';
import renderer from 'react-test-renderer';
import PageNotFound from './page-not-found';

it(`Not found page correctly renders after relaunch`, () => {
  const tree = renderer.create(<PageNotFound/>).toJSON();
  expect(tree).toMatchSnapshot();
});
