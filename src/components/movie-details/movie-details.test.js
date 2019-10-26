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
  }
};

it(`Movie details card correctly renders after relaunch`, () => {
  const {movie} = mock;
  const tree = renderer.create(<MovieDetails movie={movie}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
