import React from 'react';
import renderer from 'react-test-renderer';
import {VideoPlayerProgress} from './video-player-progress';

const props = {
  progressPosition: 0,
  progressRef: React.createRef(),
  toggleRef: React.createRef(),
  timing: `00:00:00`,
};

it(`Video player progress correctly renders after relaunch`, () => {
  const tree = renderer.create(<VideoPlayerProgress {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
