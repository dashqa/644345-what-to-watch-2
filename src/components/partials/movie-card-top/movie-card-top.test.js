import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardTop from './movie-card-top';

const mock = {
  movie: {
    name: ``,
    genre: ``,
    released: 0,
    backgroundImage: ``,
    posterImage: ``
  },
};

it(`Movie card top correctly renders after relaunch`, () => {
  const {movie} = mock;
  const tree = renderer.create(
      <MovieCardTop
        movie={movie}
        isPromoMovie={false}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
