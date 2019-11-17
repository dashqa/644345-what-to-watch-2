import React from 'react';
import renderer from 'react-test-renderer';
import TabReviews from './tab-reviews';

const props = {
  dividedComments: {},
};

it(`Reviews tab correctly renders after relaunch`, () => {
  const tree = renderer.create(<TabReviews {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
