import React from 'react';
import renderer from "react-test-renderer";
import {MainPage} from './main-page';
import {BrowserRouter} from "react-router-dom";

const props = {
  movies: [],
  promoMovie: {}
};

jest.mock(`@partials/catalog/catalog.jsx`, () => `Catalog`);
jest.mock(`@partials/header/header.jsx`, () => `Header`);
jest.mock(`@partials/movie-buttons/movie-buttons.jsx`, () => `MovieButtons`);

it(`Main page correctly renders after relaunch`, () => {
  const tree = renderer.create(<BrowserRouter><MainPage {...props}/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
