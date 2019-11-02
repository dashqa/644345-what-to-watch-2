import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from './movie-details';

const mock = {
  movie: {
    name: ``,
    genre: ``,
    released: 0,
    runTime: 0,
    backgroundImage: ``,
    posterImage: ``,
    director: ``,
    starring: [],
  },
  relatedMovies: []
};

it(`Movie details card correctly renders after relaunch`, () => {
  const {movie, relatedMovies} = mock;
  const tree = renderer.create(
      <MovieDetails
        movie={movie}
        relatedMovies={relatedMovies}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
