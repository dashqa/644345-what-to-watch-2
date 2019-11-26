import React from 'react';
import {Catalog} from './catalog';
import renderer from "react-test-renderer";

const props = {
  movies: [],
  genres: new Set([`All genres`]),
  moviesCounter: 10,
  activeFilter: `All genres`,
  onChangeFilter: () => {},
  onShowMoreClick: () => {},
  sectionClassMods: `section-class-name`,
  headerClassMods: `header-class-name`,
  sectionTitle: `This is title`,
  needFilter: true,
  needShowMore: true,
};

it(`Catalog correctly renders after relaunch`, () => {
  const tree = renderer.create(<Catalog {...props}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
