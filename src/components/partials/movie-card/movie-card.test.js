import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

const mock = {
  movie: {
    name: ``,
    genre: ``,
    released: 0,
    backgroundImage: ``,
    posterImage: ``,
    runTime: 0,
    director: ``,
    starring: [],
  },
};

it(`Movie card correctly renders after relaunch`, () => {
  const {movie} = mock;
  const tree = renderer.create(
      <MovieCard
        movie={movie}
        isPromoMovie={false}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
