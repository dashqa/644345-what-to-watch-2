import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card";

jest.mock(`../../partials/movie-card-top/movie-card-top.jsx`, () => `MovieCardTop`);
jest.mock(`../../partials/movie-card-bottom/movie-card-bottom.jsx`, () => `MovieCardBottom`);

const props = {
  movie: {
    backgroundColor: ``
  },
};

it(`Movie card correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieCard {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
