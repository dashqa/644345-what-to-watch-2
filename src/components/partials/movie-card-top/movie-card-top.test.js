import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import MovieCardTop from './movie-card-top';

jest.mock(`../../partials/movie-card-poster/movie-card-poster.jsx`, () => `MovieCardPoster`);
jest.mock(`../../partials/movie-card-top-desc/movie-card-top-desc.jsx`, () => `MovieCardTopDesc`);

const props = {
  movie: {
    id: 0,
    name: ``,
    genre: ``,
    released: 0,
    backgroundImage: ``,
    posterImage: ``,
  },
  isPromoMovie: false,
};

it(`Movie card top correctly renders after relaunch`, () => {
  const tree = renderer.create(<BrowserRouter><MovieCardTop {...props}/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
