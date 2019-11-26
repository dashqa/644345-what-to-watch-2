import React from 'react';
import renderer from 'react-test-renderer';
import {TabReviews} from './tab-reviews';

const props = {
  dividedComments: {
    odd: [{
      id: 1,
      user: {
        id: 1,
        name: `Dasha`
      },
      comment: `Hello!!`,
      date: `2019-11-24T02:28:44.715Z`,
      rating: 3.5
    }],
    even: [{
      id: 2,
      user: {
        id: 4,
        name: `Masha`
      },
      comment: `Bye`,
      date: `2019-11-09T02:28:44.715Z`,
      rating: 1.1
    }]
  },
};

it(`Reviews tab correctly renders after relaunch`, () => {
  const tree = renderer.create(<TabReviews {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
