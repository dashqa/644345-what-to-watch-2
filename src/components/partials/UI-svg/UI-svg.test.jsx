import React from 'react';
import renderer from 'react-test-renderer';
import UISvg from './UI-svg';

const mock = {
  xlink: ``,
  viewBox: ``,
  width: 0,
  height: 0,
};

it(`UI svg correctly renders after relaunch`, () => {
  const {xlink, viewBox, width, height} = mock;
  const tree = renderer.create(
      <UISvg
        xlink={xlink}
        viewBox={viewBox}
        width={width}
        height={height}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
