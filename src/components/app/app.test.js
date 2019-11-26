import React from 'react';
import {shallow} from "enzyme";
import toJSON from "enzyme-to-json";
import {App} from "./app";

it(`App correctly renders after relaunch`, () => {
  const tree = shallow(<App/>);
  expect(toJSON(tree)).toMatchSnapshot();
});
