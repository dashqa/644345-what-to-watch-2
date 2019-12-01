import React from 'react';
import {shallow} from 'enzyme';
import withPlayerDuration from "./with-player-duration";

const MockComponent = () => <progress/>;
const WrappedMockComponent = withPlayerDuration(MockComponent);


describe(`withPlayerDuration test`, () => {
  function mockGetRef() {
    // eslint-disable-next-line no-invalid-this
    this.videoRef = {src: ``};
  }

  const spy = jest.spyOn(WrappedMockComponent.prototype, `componentDidMount`).mockImplementationOnce(mockGetRef);
  const wrapper = shallow(<WrappedMockComponent/>);
  expect(spy).toHaveBeenCalled();

  const currentMovieTime = 50;
  const durationInSec = 600;

  it(`should change timeLeft state when call calculateTimeLeft to given value`, () => {
    wrapper.instance()._calculateTimeLeft(currentMovieTime, durationInSec);
    expect(wrapper.state().timeLeft).toEqual(durationInSec - currentMovieTime);
  });


  it(`should change percentage state when call calculatePercentage to given value`, () => {
    wrapper.instance()._calculatePercentage(currentMovieTime, durationInSec);
    expect(wrapper.state().percentage).toEqual(currentMovieTime / durationInSec * 100);
  });
});
