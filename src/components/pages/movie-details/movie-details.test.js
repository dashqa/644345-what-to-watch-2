import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from './movie-details';

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
    description: ``,
    rating: 0,
    scoresCount: 0,
    comments: []
  },
  relatedMovies: []
};

it(`Movie details card correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieDetails {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
