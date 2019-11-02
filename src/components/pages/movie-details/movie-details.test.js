import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from './movie-details';

const props = {
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
  const tree = renderer.create(<MovieDetails {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
