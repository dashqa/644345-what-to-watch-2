import React from 'react';
import renderer from 'react-test-renderer';
import {MovieDetails} from './movie-details';
import {BrowserRouter} from "react-router-dom";

jest.mock(`@partials/catalog/catalog.jsx`, () => `Catalog`);
jest.mock(`@partials/movie-card-tabs/movie-card-tabs.jsx`, () => `MovieCardTabs`);
jest.mock(`@partials/header/header.jsx`, () => `Header`);

const props = {
  movies: [],
  currentMovie: {},
};

it(`Movie details card correctly renders after relaunch`, () => {
  const tree = renderer.create(<BrowserRouter><MovieDetails {...props}/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
