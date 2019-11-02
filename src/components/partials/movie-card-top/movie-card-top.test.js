import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardTop from './movie-card-top';

const props = {
  movie: {
    name: ``,
    genre: ``,
    released: 0,
    backgroundImage: ``,
    posterImage: ``
  },
};

it(`Movie card top correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieCardTop {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
