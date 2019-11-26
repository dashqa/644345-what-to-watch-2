import React from 'react';
import renderer from 'react-test-renderer';
import TabOverview from './tab-overview';

const props = {
  rating: 4.4,
  scoresCount: 100500,
  description: `My description`,
  director: `Lynne Ramsay`,
  starring: [`Tilda Swinton`, `John C. Reilly`],
};

it(`Overview tab correctly renders after relaunch`, () => {
  const tree = renderer.create(<TabOverview {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
