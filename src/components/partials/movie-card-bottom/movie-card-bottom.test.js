import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardBottom from './movie-card-bottom';

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

it(`Movie card bottom correctly renders after relaunch`, () => {
  const {movie} = mock;
  const tree = renderer.create(<MovieCardBottom movie={movie}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
