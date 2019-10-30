import React from 'react';
import renderer from 'react-test-renderer';
import UIButton from './UI-button';

const mock = {
  classMods: ``,
  title: ``
};

it(`UI button correctly renders after relaunch`, () => {
  const {classMods, title} = mock;
  const tree = renderer.create(
      <UIButton
        classMods={classMods}
        title={title}
        onClick={()=>{}}
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
