import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card';

const props = {
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
  const tree = renderer.create(<MovieCard {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
