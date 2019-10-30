import React from 'react';
import renderer from 'react-test-renderer';
import UISvg from './UI-svg';

const props = {
  xlink: ``,
  viewBox: ``,
  width: ``,
  height: ``,
};

it(`UI svg correctly renders after relaunch`, () => {
  const tree = renderer.create(<UISvg {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
