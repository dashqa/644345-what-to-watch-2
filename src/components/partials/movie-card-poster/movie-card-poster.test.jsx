import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardPoster from './movie-card-poster';

const mock = {
  name: ``,
  posterImage: ``,
  isBig: false,
};

it(`Movie card poster correctly renders after relaunch`, () => {
  const {name, posterImage, isBig} = mock;
  const tree = renderer.create(
      <MovieCardPoster
        name={name}
        posterImage={posterImage}
        isBig={isBig}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
