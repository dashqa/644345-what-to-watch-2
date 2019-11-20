import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import MovieCardTopDesc from './movie-card-top-desc';

const props = {
  name: ``,
  genre: ``,
  released: 0,
};

it(`Movie card top desc correctly renders after relaunch`, () => {
  const tree = renderer.create(<BrowserRouter><MovieCardTopDesc {...props}/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
