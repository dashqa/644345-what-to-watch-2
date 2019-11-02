import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardTopDesc from './movie-card-top-desc';

const props = {
  name: ``,
  genre: ``,
  released: 0,
};

it(`Movie card top desc correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieCardTopDesc {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
