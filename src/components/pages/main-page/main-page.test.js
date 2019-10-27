import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page';

const mock = {
  movies: [],
  promoMovie: {
    name: ``,
    genre: ``,
    released: 0,
    backgroundImage: ``,
    posterImage: ``,
  },
};

it(`Main page correctly renders after relaunch`, () => {
  const {movies, promoMovie} = mock;
  const tree = renderer.create(
      <MainPage
        movies={movies}
        promoMovie={promoMovie}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
