import React from 'react';
import renderer from 'react-test-renderer';
import CatalogFilter from './catalog-filter';

const props = {
  active: `Comedy`,
  genres: new Set([`Comedy`]),
  onChange: () => {}
};

it(`Catalog filter correctly renders after relaunch`, () => {
  const tree = renderer.create(<CatalogFilter {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
