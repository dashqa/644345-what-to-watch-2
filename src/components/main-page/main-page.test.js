import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page';

const mock = {
  movies: [],
};

it(`Main page correctly renders after relaunch`, () => {
  const {movies} = mock;
  const tree = renderer
    .create(<MainPage movies={movies}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
