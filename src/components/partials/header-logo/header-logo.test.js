import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom";
import HeaderLogo from './header-logo';


it(`Header logo correctly renders after relaunch`, () => {
  const tree = renderer.create(<BrowserRouter><HeaderLogo/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
