import React from 'react';
import renderer from "react-test-renderer";
import {AddReview} from './add-review';
import {BrowserRouter} from "react-router-dom";

const props = {
  currentMovie: {
    id: 1,
    name: `Bohemian Rhapsody`,
    backgroundImage: `https://htmlacademy.com/poster/Bohemian_Rhapsody.jpg`,
    posterImage: `https://htmlacademy.com/poster/Bohemian_Rhapsody.jpg`,
    backgroundColor: `#929FA5`,
  },
  isValid: false,
  formData: {
    rating: `2`,
    comment: `hello`
  },
  error: null,
  onChange: () => {},
  onSubmit: () => {},
  loaders: {
    review: {
      status: false
    }
  },
};

jest.mock(`@partials/user-block/user-block.jsx`, () => `UserBlock`);

it(`Add review page correctly renders after relaunch`, () => {
  const tree = renderer.create(<BrowserRouter><AddReview {...props}/></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
