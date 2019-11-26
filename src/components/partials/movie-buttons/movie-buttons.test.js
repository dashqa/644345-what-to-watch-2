import React from 'react';
import renderer from 'react-test-renderer';
import {MovieButtons} from './movie-buttons';

const props = {
  movieId: 1,
  isFavorite: true,
  onAddToFavorite: () => {},
};

it(`Movie buttons correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieButtons {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
