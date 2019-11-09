import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardBottom from './movie-card-bottom';

jest.mock(`../../partials/movie-card-poster/movie-card-poster.jsx`, () => `MovieCardPoster`);
jest.mock(`../../partials/movie-card-tabs/movie-card-tabs.jsx`, () => `MovieCardTabs`);
jest.mock(`../../partials/tab-overview/tab-overview.jsx`, () => `TabOverview`);
jest.mock(`../../partials/tab-details/tab-details.jsx`, () => `TabDetails`);
jest.mock(`../../partials/tab-reviews/tab-reviews.jsx`, () => `TabReviews`);

const props = {
  movie: {
    name: ``,
    genre: ``,
    released: 0,
    backgroundImage: ``,
    posterImage: ``,
    runTime: 0,
    director: ``,
    starring: [],
    description: ``,
    rating: 0,
    scoresCount: 0,
    comments: []
  },
};

it(`Movie card bottom correctly renders after relaunch`, () => {
  const tree = renderer.create(<MovieCardBottom {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
