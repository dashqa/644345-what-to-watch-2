import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardInfo from './movie-card-info';

const props = {
  name: `A Star Is Born`,
  genre: `Drama`,
  released: 2010,
};

it(`Movie card info correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieCardInfo {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
