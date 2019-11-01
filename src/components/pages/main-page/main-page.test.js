import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page';

jest.mock(`../../partials/movie-card/movie-card.jsx`, () => `MovieCard`);
jest.mock(`../../partials/catalog/catalog.jsx`, () => `Catalog`);

const props = {
  movies: [],
  promoMovie: {}
};

it(`Main page correctly renders after relaunch`, () => {
  const tree = renderer.create(<MainPage {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
