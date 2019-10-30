import React from 'react';
import renderer from 'react-test-renderer';
import UIButton from './UI-button';

const props = {
  classMods: ``,
  title: ``,
  onClick: () => {},
};

it(`UI button correctly renders after relaunch`, () => {
  const tree = renderer.create(<UIButton {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
