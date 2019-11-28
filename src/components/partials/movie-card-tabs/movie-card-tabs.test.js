import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardTabs from './movie-card-tabs';
import {MovieTabs} from "@constants";

const props = {
  onChangeTab: () => {},
  movie: {
    genre: `Drama`,
    description: `This is very interesting description`,
    released: 1990,
    rating: 6.7,
    runTime: 190,
    director: `Lynne Ramsay`,
    starring: [`Tilda Swinton`, `Ezra Miller`],
    scoresCount: 189999,
  },
  comments: []
};

it(`Movie card tabs correctly renders with overview tab`, () => {
  const active = MovieTabs.OVERVIEW;
  const tree = renderer.create(<MovieCardTabs active={active} {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Movie card tabs correctly renders with details tab`, () => {
  const active = MovieTabs.DETAILS;
  const tree = renderer.create(<MovieCardTabs active={active} {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Movie card tabs correctly renders with review tab`, () => {
  const active = MovieTabs.REVIEWS;
  const tree = renderer.create(<MovieCardTabs active={active} {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
