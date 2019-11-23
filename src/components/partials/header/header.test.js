import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import Header from './header';

jest.mock(`@partials/user-block/user-block.jsx`, () => `UserBlock`);


it(`Header correctly renders after relaunch`, () => {
  const tree = renderer.create(<BrowserRouter><Header/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
