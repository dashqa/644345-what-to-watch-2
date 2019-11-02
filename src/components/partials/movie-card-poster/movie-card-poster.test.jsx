import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardPoster from './movie-card-poster';

const props = {
  name: ``,
  posterImage: ``,
  isBig: false,
};

it(`Movie card poster correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieCardPoster {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
