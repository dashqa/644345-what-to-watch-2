import React from 'react';
import renderer from 'react-test-renderer';
import TabDetails from './tab-details';

const props = {
  runTime: 180,
  genre: `Thriller`,
  released: 1980,
  director: `Lynne Ramsay`,
  starring: [`Tilda Swinton`, `John C. Reilly`],
};

it(`Details tab correctly renders after relaunch`, () => {
  const tree = renderer.create(<TabDetails {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
