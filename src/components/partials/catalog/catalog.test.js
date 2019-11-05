import React from 'react';
import Catalog from './catalog';
import {shallow} from "enzyme";
import toJSON from "enzyme-to-json";

import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();

const props = {
  movies: [],
  isMainCatalog: false
};

const store = mockStore(props);

it(`Catalog correctly renders after relaunch`, () => {
  const tree = shallow(<Catalog store={store}/>);
  expect(toJSON(tree)).toMatchSnapshot();
});
