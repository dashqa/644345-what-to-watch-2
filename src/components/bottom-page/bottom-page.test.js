import React from 'react';
import renderer from 'react-test-renderer';
import BottomPage from './bottom-page';

const mock = {
  movies: [],
};

it(`Bottom page correctly renders after relaunch`, () => {
  const {movies} = mock;
  const tree = renderer
    .create(<BottomPage movies={movies}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
