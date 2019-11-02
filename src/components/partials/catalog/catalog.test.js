import React from 'react';
import renderer from 'react-test-renderer';
import Catalog from './catalog';

const props = {
  movies: [],
  isMainCatalog: false
};

it(`Catalog correctly renders after relaunch`, () => {
  const tree = renderer.create(<Catalog {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
