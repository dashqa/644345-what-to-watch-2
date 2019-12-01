import React from "react";
import {shallow} from 'enzyme';
import {withReviewSubmit} from "./with-review-submit";

const MockComponent = () => <div/>;
const WrappedMockComponent = withReviewSubmit(MockComponent);

describe(`Should change state when call handleChange`, () => {
  const wrapper = shallow(<WrappedMockComponent />);

  it(`with valid data`, () => {
    const event1 = {
      target: {
        name: `rating`,
        value: `5`
      }
    };
    const event2 = {
      target: {
        name: `comment`,
        value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
      }
    };

    wrapper.instance()._handleChange(event1);
    wrapper.instance()._handleChange(event2);
    expect(wrapper.state().formData).toEqual({
      rating: `5`,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
    });
    expect(wrapper.state().isValid).toEqual(true);
  });

  it(`with non valid data`, () => {
    const event1 = {
      target: {
        name: `rating`,
        value: ``
      }
    };
    const event2 = {
      target: {
        name: `comment`,
        value: `Lorem ipsum dolor sit amet.`
      }
    };

    wrapper.instance()._handleChange(event1);
    wrapper.instance()._handleChange(event2);
    expect(wrapper.state().formData).toEqual({
      rating: ``,
      comment: `Lorem ipsum dolor sit amet.`
    });
    expect(wrapper.state().isValid).toEqual(false);
  });
});

describe(`Should call an onUploadReview function when call handleSubmit`, () => {
  const event = {
    preventDefault: () => {}
  };

  let onUploadReview;
  let wrapper;

  beforeEach(() => {
    onUploadReview = jest.fn().mockImplementationOnce(() => Promise.resolve(`data`));
    wrapper = shallow(<WrappedMockComponent onUploadReview={onUploadReview}/>);
  });

  it(`with valid fields`, () => {
    wrapper.setState({isValid: true});
    wrapper.instance()._handleSubmit(event);
    expect(onUploadReview).toHaveBeenCalledTimes(1);
  });

  it(`with non valid fields`, () => {
    wrapper.setState({isValid: false});
    wrapper.instance()._handleSubmit(event);
    expect(onUploadReview).toHaveBeenCalledTimes(0);
  });
});
