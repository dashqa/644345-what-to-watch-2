import React from 'react';
import renderer from 'react-test-renderer';
import Catalog from './catalog';

const mock = {
  movies: [],
};

it(`Catalog correctly renders after relaunch`, () => {
  const {movies} = mock;
  const tree = renderer.create(
      <Catalog
        movies={movies}
        isMainCatalog={false}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
