import React from 'react';
import renderer from 'react-test-renderer';
import {UserBlock} from './user-block';
import {BrowserRouter} from "react-router-dom";

const props = {
  user: {
    name: `Dasha`,
    avatar: `https://image.com/image.png`
  }
};

it(`User block correctly renders after relaunch`, () => {
  const tree = renderer.create(<BrowserRouter><UserBlock {...props}/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
