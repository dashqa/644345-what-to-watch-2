import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';

it(`Footer correctly renders after relaunch`, () => {
  const tree = renderer.create(<Footer/>).toJSON();
  expect(tree).toMatchSnapshot();
});
