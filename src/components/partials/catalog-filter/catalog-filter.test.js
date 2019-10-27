import React from 'react';
import renderer from 'react-test-renderer';
import CatalogFilter from './catalog-filter';

const mock = {
  active: ``,
};

it(`Catalog filter correctly renders after relaunch`, () => {
  const {active} = mock;
  const tree = renderer.create(<CatalogFilter active={active}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
