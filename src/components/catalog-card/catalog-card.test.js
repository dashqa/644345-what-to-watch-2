import React from 'react';
import renderer from 'react-test-renderer';
import CatalogCard from './catalog-card';

const mock = {
  movie: {
    name: ``,
    previewImage: ``
  }
};

it(`Catalog card correctly renders after relaunch`, () => {
  const {movie} = mock;
  const tree = renderer
    .create(
        <CatalogCard
          movie={movie}
          onCardHover={() => {}}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
