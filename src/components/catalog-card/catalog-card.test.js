import React from 'react';
import renderer from 'react-test-renderer';
import CatalogCard from './catalog-card';

it(`Catalog card correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<CatalogCard
      title={`Spider Man`}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
