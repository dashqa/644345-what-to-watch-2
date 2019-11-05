import React from 'react';
import {shallow} from "enzyme";
import toJSON from "enzyme-to-json";
import App from "./app";
import configureMockStore from "redux-mock-store";
import {initialState} from "../../store/reducers";

const mockStore = configureMockStore();
const store = mockStore(initialState);

it(`App correctly renders after relaunch`, () => {
  const tree = shallow(<App store={store}/>);
  expect(toJSON(tree)).toMatchSnapshot();
});
