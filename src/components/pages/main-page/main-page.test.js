import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page';
import MovieCard from "../../partials/movie-card/movie-card.jsx";
import Catalog from "../../partials/catalog/catalog.jsx";

jest.mock(`../../partials/movie-card/movie-card.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../../partials/catalog/catalog.jsx`, () => jest.fn().mockReturnValue(null));

const props = {
  movies: [],
  promoMovie: {}
  // promoMovie: {
  //   name: ``,
  //   genre: ``,
  //   released: 0,
  //   backgroundImage: ``,
  //   posterImage: ``,
  // },
};

it(`Main page correctly renders after relaunch`, () => {
  const tree = renderer.create(<MainPage {...props}/>).toJSON();
  expect(MovieCard).toHaveBeenCalled();
  expect(Catalog).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
