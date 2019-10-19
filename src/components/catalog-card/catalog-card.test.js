import React from 'react';
import renderer from 'react-test-renderer';
import CatalogCard from './catalog-card';

it(`Catalog card correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<CatalogCard
      title={`Spider Man`}
      onTitleClick={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
