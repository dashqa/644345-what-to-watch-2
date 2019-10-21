import React from 'react';
import renderer from 'react-test-renderer';
import Catalog from './catalog';

it(`Catalog correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Catalog filmTitles={[`Spider Man`]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
