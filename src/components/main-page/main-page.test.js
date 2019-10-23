import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page';

it(`Main page correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainPage filmTitles={[`Spider Man`]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
