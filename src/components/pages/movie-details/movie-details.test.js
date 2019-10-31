import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from './movie-details';
import MovieCard from "../../partials/movie-card/movie-card.jsx";
import Catalog from "../../partials/catalog/catalog.jsx";
import Footer from "../../partials/footer/footer.jsx";

jest.mock(`../../partials/movie-card/movie-card.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../../partials/catalog/catalog.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../../partials/footer/footer.jsx`, () => jest.fn().mockReturnValue(null));

const props = {
  // movie: {
  //   name: ``,
  //   genre: ``,
  //   released: 0,
  //   backgroundImage: ``,
  //   posterImage: ``,
  //   runTime: 0,
  //   director: ``,
  //   starring: [],
  //   description: ``,
  //   rating: 0,
  //   scoresCount: 0,
  //   comments: []
  // },
  movie: {},
  relatedMovies: []
};

it(`Movie details card correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieDetails {...props}/>).toJSON();

  expect(MovieCard).toHaveBeenCalled();
  expect(Catalog).toHaveBeenCalled();
  expect(Footer).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
