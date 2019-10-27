import React from 'react';
import renderer from 'react-test-renderer';
import MovieButtons from './movie-buttons';

it(`Movie buttons correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieButtons/>).toJSON();
  expect(tree).toMatchSnapshot();
});
