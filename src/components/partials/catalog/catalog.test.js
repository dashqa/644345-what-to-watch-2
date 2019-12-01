import React from 'react';
import {Catalog} from './catalog';
import renderer from "react-test-renderer";

const props = {
  movies: [],
  genres: new Set([`All genres`]),
  moviesCounter: 0,
  activeFilter: `All genres`,
  onChangeFilter: () => {},
  onShowMoreClick: () => {},
  sectionClassMods: `section-class-name`,
  headerClassMods: `header-class-name`,
  sectionTitle: `This is title`,
  needFilter: false,
  needShowMore: false,
};

describe(`Catalog correctly renders after relaunch`, () => {
  it(`Without any additional block`, () => {
    const tree = renderer.create(<Catalog {...props}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it(`with filter block`, () => {
    const tree = renderer.create(<Catalog {...props} needFilter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`with showMore block`, () => {
    const tree = renderer.create(<Catalog {...props} needShowMore/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


