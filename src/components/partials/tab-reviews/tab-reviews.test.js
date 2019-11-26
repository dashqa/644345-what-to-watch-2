import React from 'react';
import renderer from 'react-test-renderer';
import {TabReviews} from './tab-reviews';
import moment from "moment";

const props = {
  dividedComments: {
    odd: [{
      id: 1,
      user: {
        id: 1,
        name: `Dasha`
      },
      comment: `Hello!!`,
      date: new Date(2019, 11, 14),
      rating: 3.5
    }],
    even: [{
      id: 2,
      user: {
        id: 4,
        name: `Masha`
      },
      comment: `Bye`,
      date: new Date(2019, 11, 27),
      rating: 1.1
    }]
  },
};

it(`Reviews tab correctly renders after relaunch`, () => {
  const tree = renderer.create(<TabReviews {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
