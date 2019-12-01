import React from "react";
import {shallow} from 'enzyme';
import {withAuthSubmit} from "./with-auth-submit";

const MockComponent = () => <div/>;
const WrappedMockComponent = withAuthSubmit(MockComponent);

describe(`Should change state when call handleChange`, () => {
  const wrapper = shallow(<WrappedMockComponent />);
  it(`without errors`, () => {
    const event1 = {
      target: {
        name: `email`,
        value: `dasha@gmail.com`
      }
    };

    const event2 = {
      target: {
        name: `password`,
        value: `1234567`
      }
    };

    const noErrors = {
      email: ``,
      password: ``,
    };


    wrapper.instance()._handleChange(event1);
    expect(wrapper.state().formData).toEqual({
      email: `dasha@gmail.com`,
      password: ``
    });
    expect(wrapper.state().errors).toEqual(noErrors);
    expect(wrapper.state().isValid).toEqual(false);

    wrapper.instance()._handleChange(event2);
    expect(wrapper.state().formData).toEqual({
      email: `dasha@gmail.com`,
      password: `1234567`
    });
    expect(wrapper.state().errors).toEqual(noErrors);
    expect(wrapper.state().isValid).toEqual(true);
  });

  it(`with errors`, () => {
    const event1 = {
      target: {
        name: `email`,
        value: `dasha@`
      }
    };

    const event2 = {
      target: {
        name: `password`,
        value: `12`
      }
    };

    const withEmailError = {
      email: `Please enter a valid email address.`,
      password: ``,
    };

    const withEmailAndPasswordError = {
      email: `Please enter a valid email address.`,
      password: `Please enter a valid password.`,
    };


    wrapper.instance()._handleChange(event1);
    expect(wrapper.state().formData).toEqual({
      email: `dasha@`,
      password: `1234567`
    });
    expect(wrapper.state().errors).toEqual(withEmailError);
    expect(wrapper.state().isValid).toEqual(false);

    wrapper.instance()._handleChange(event2);
    expect(wrapper.state().formData).toEqual({
      email: `dasha@`,
      password: `12`
    });
    expect(wrapper.state().errors).toEqual(withEmailAndPasswordError);
    expect(wrapper.state().isValid).toEqual(false);

    wrapper.update();
  });
});

describe(`Should call an onAuthorizeUser function when call handleSubmit`, () => {
  const event = {
    preventDefault: () => {}
  };

  let onAuthorizeUser;
  let wrapper;

  beforeEach(() => {
    onAuthorizeUser = jest.fn().mockImplementationOnce(() => Promise.resolve(`data`));
    wrapper = shallow(<WrappedMockComponent onAuthorizeUser={onAuthorizeUser}/>);
  });

  it(`with valid fields`, () => {
    wrapper.setState({isValid: true});
    wrapper.instance()._handleSubmit(event);
    expect(onAuthorizeUser).toHaveBeenCalledTimes(1);
  });

  it(`with non valid fields`, () => {
    wrapper.setState({isValid: false});
    wrapper.instance()._handleSubmit(event);
    expect(onAuthorizeUser).toHaveBeenCalledTimes(0);
  });
});


