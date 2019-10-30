import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';

const props = {
  poster: ``,
  link: ``,
  width: ``,
  height: ``,
  controls: false,
  muted: false,
};

it(`Video player correctly renders after relaunch`, () => {
  const tree = renderer.create(<VideoPlayer {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
