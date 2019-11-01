import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from './movie-details';

jest.mock(`../../partials/movie-card/movie-card.jsx`, () => `MovieCard`);
jest.mock(`../../partials/catalog/catalog.jsx`, () => `Catalog`);
jest.mock(`../../partials/footer/footer.jsx`, () => `Footer`);

const props = {
  movie: {},
  relatedMovies: []
};

it(`Movie details card correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieDetails {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
