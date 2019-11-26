import React from 'react';
import renderer from 'react-test-renderer';
import RatingRadio from './rating-radio';

const props = {
  id: `my-input-1`,
  value: 1,
  checkedFlag: 1,
  onChange: () => {}
};

it(`Rating radio poster correctly renders after relaunch`, () => {
  const tree = renderer.create(<RatingRadio {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
