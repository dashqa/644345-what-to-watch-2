import React from 'react';
import renderer from 'react-test-renderer';
import SvgButton from './svg-button';

const props = {
  classes: `play`,
  title: `Play button`,
  svgViewBox: `0 0 19 19`,
  svgWidth: `19`,
  svgHeight: `19`,
  svgXlink: `#play-s`,
  onClick: () => {}
};

it(`Svg button correctly renders after relaunch`, () => {
  const tree = renderer.create(<SvgButton {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
