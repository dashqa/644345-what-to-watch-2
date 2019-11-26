import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardBackground from './movie-card-background';

const props = {
  name: `Title`,
  backgroundImage: `http://image.com/image.png`,
};

it(`Movie card background correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieCardBackground {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
