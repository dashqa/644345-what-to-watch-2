import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import {CatalogCard} from './catalog-card';

const props = {
  movie: {
    id: 0,
    name: ``,
    previewImage: ``
  },
  onClickCard: () => {},
  history: {},
};

it(`Catalog card correctly renders after relaunch`, () => {
  const tree = renderer.create(<BrowserRouter><CatalogCard {...props}/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
