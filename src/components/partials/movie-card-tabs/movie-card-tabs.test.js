import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardTabs from './movie-card-tabs';

const props = {
  active: ``,
  onChangeTab: () => {},
};

it(`Movie card tabs correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieCardTabs {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
