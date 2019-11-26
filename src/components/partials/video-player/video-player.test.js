import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';

const props = {
  classes: `player-class`,
  poster: `https://image.com/image.png`,
  link: `https://video.com/video.mp4`,
  width: `300`,
  height: `300`,
  controls: false,
  muted: false,
  videoRef: React.createRef(),
};

it(`Video player correctly renders after relaunch`, () => {
  const tree = renderer.create(<VideoPlayer {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
