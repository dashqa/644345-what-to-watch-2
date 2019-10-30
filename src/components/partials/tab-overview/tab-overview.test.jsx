import React from 'react';
import renderer from 'react-test-renderer';
import TabOverview from './tab-overview';

const props = {
  rating: 0,
  scoresCount: 0,
  description: ``,
  director: ``,
  starring: [],
};

it(`Overview tab correctly renders after relaunch`, () => {
  const tree = renderer.create(<TabOverview {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
