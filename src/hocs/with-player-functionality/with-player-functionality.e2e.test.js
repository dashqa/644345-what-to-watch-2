import React from 'react';
import {shallow} from 'enzyme';
import withPlayerFunctionality from "./with-player-functionality";

const MockComponent = () => <video/>;
const WrappedMockComponent = withPlayerFunctionality(MockComponent);

describe(`withPlayerDuration test without history`, () => {
  let wrapper;
  let videoRef;

  beforeEach(() => {
    videoRef = {
      play: jest.fn(),
      pause: jest.fn(),
      requestFullscreen: jest.fn(),
    };
    wrapper = shallow(<WrappedMockComponent/>);
    wrapper.instance()._video.current = videoRef;
  });


  it(`should play video when call handlePlayPause if isPlaying false`, () => {
    wrapper.setProps({isPlaying: false});
    wrapper.instance()._handlePlayPause();

    expect(wrapper.instance()._video.current.play).toHaveBeenCalledTimes(1);
    expect(wrapper.instance()._video.current.pause).toHaveBeenCalledTimes(0);
    expect(wrapper.state().isPlaying).toEqual(true);
  });

  it(`should go to full screen when call handleFullScreen`, () => {
    wrapper.instance()._handleFullScreen();

    expect(wrapper.instance()._video.current.requestFullscreen).toHaveBeenCalledTimes(1);
  });
});

describe(`withPlayerDuration test with history`, () => {
  let historyMock;
  let location;

  beforeEach(() => {
    historyMock = {
      push: jest.fn(),
      goBack: jest.fn()
    };
    location = {
      key: null
    };
  });

  it(`if location key null should redirect to main page when call handleClosePlayer`, () => {
    const wrapper = shallow(<WrappedMockComponent history={historyMock} location={location}/>);
    wrapper.instance()._handleClosePlayer();

    expect(window.location.href).toBe(`http://localhost/`);
    expect(wrapper.props().history.goBack).toHaveBeenCalledTimes(0);
  });

  it(`if location key is not null should redirect back when call handleClosePlayer`, () => {
    location = {
      key: `1`
    };

    const wrapper = shallow(<WrappedMockComponent history={historyMock} location={location}/>);
    wrapper.instance()._handleClosePlayer();

    expect(wrapper.props().history.push).toHaveBeenCalledTimes(0);
    expect(wrapper.props().history.goBack).toHaveBeenCalledTimes(1);
  });
});


