import React from 'react';
import renderer from 'react-test-renderer';
import SvgButton from './svg-button';

const props = {
  classes: ``,
  title: ``,
  svgViewBox: ``,
  svgWidth: ``,
  svgHeight: ``,
  svgXlink: ``,
  onClick: () => {}
};

it(`Svg button correctly renders after relaunch`, () => {
  const tree = renderer.create(<SvgButton {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
