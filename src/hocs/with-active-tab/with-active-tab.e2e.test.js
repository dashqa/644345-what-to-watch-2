import React from 'react';
import {shallow} from 'enzyme';
import withActiveTab from "./with-active-tab";

const MockComponent = () => <div/>;
const WrappedMockComponent = withActiveTab(MockComponent);
const activeTab = `String`;

describe(`withActiveTab test`, () => {
  it(`should change activeTab state when call handleChangeTab to given value`, () => {
    const wrapper = shallow(<WrappedMockComponent />);

    wrapper.instance()._handleChangeTab(activeTab);
    expect(wrapper.state().activeTab).toEqual(activeTab);
  });
});
