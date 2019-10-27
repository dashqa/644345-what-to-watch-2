import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardTopDesc from './movie-card-top-desc';

const mock = {
  name: ``,
  genre: ``,
  released: 0,
};

it(`Movie card top desc correctly renders after relaunch`, () => {
  const {name, genre, released} = mock;
  const tree = renderer.create(
      <MovieCardTopDesc
        name={name}
        genre={genre}
        released={released}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
