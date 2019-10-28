import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import CatalogCard from './catalog-card';

const mock = {
  movie: {
    id: 0,
    name: ``,
    previewImage: ``
  }
};

it(`Catalog card correctly renders after relaunch`, () => {
  const {movie} = mock;
  const tree = renderer
    .create(
        <BrowserRouter>
          <CatalogCard
            movie={movie}
            onCardHover={() => {}}
          />
        </BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
