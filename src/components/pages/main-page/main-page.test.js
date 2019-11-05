import React from 'react';
import MainPage from './main-page';
import {shallow} from "enzyme";
import toJSON from "enzyme-to-json";
import configureMockStore from "redux-mock-store";

const props = {
  movies: [],
  promoMovie: {}
};

const mockStore = configureMockStore();
const store = mockStore(props);

jest.mock(`../../partials/movie-card/movie-card.jsx`, () => `MovieCard`);
jest.mock(`../../partials/catalog/catalog.jsx`, () => `Catalog`);

it(`Main page correctly renders after relaunch`, () => {
  const tree = shallow(<MainPage store={store}/>);
  expect(toJSON(tree)).toMatchSnapshot();
});
