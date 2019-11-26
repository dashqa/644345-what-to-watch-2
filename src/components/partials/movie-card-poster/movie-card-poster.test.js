import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardPoster from './movie-card-poster';

const props = {
  name: `We need to talk about Kevin`,
  posterImage: `http://image.com/image.png`,
  classMods: `card-poster`,
};

it(`Movie card poster correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieCardPoster {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
