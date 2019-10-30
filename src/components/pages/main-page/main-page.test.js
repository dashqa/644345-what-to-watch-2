import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page';

const props = {
  movies: [],
  promoMovie: {
    name: ``,
    genre: ``,
    released: 0,
    backgroundImage: ``,
    posterImage: ``,
  },
};

it(`Main page correctly renders after relaunch`, () => {
  const tree = renderer.create(<MainPage {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
