import React from 'react';
import {Catalog} from './catalog';
import renderer from "react-test-renderer";

const props = {
  movies: [],
  isMainCatalog: false
};

it(`Catalog correctly renders after relaunch`, () => {
  const tree = renderer.create(<Catalog {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
