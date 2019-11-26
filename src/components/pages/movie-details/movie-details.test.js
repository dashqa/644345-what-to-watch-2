import React from 'react';
import renderer from 'react-test-renderer';
import {MovieDetails} from './movie-details';
import {BrowserRouter} from "react-router-dom";

jest.mock(`@partials/catalog/catalog.jsx`, () => `Catalog`);
jest.mock(`@partials/movie-card-tabs/movie-card-tabs.jsx`, () => `MovieCardTabs`);
jest.mock(`@partials/header/header.jsx`, () => `Header`);
jest.mock(`@partials/movie-buttons/movie-buttons.jsx`, () => `MovieButtons`);

const props = {
  currentMovie: {},
  relatedMovies: [],
  comments: [],
  onLoadComments: () => {},
};

it(`Movie details card correctly renders after relaunch`, () => {
  const tree = renderer.create(<BrowserRouter><MovieDetails {...props}/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
