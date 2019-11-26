import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in';
import {BrowserRouter} from "react-router-dom";

const props = {
  formData: {},
  onChange: () => {},
  onSubmit: () => {},
  errors: {
    email: ``,
    password: ``
  },
  isValid: false,
  authorized: false,
  history: {}
};

it(`Sign in page correctly renders after relaunch`, () => {
  const tree = renderer.create(<BrowserRouter><SignIn {...props}/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
