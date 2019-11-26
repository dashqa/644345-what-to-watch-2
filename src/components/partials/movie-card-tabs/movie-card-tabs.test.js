import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardTabs from './movie-card-tabs';

const props = {
  active: `Overview`,
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

it(`Movie card tabs correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieCardTabs {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
