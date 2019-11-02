import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardBottom from './movie-card-bottom';

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

it(`Movie card bottom correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieCardBottom {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
