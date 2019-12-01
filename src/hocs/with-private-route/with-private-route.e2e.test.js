import React from 'react';
import {shallow} from 'enzyme';
import {withPrivateRoute} from "./with-private-route";

const MockComponent = () => <div/>;
const WrappedMockComponent = withPrivateRoute(MockComponent);

describe(`withPrivateRoute should render`, () => {
  it(`component when user is authorized`, () => {
    const authorized = true;

    const wrapper = shallow(<WrappedMockComponent authorized={authorized}/>);
    expect(wrapper.find(MockComponent).length).toEqual(1);
  });

  it(`redirect when user NOT authorized`, () => {
    const authorized = false;

    const wrapper = shallow(<WrappedMockComponent authorized={authorized}/>);
    expect(wrapper.find(`Redirect`).length).toEqual(1);
  });
});
