import React from "react";
import PropTypes from "prop-types";
import {formatTime} from "@utils";

const withPlayerDuration = (Component) => {
  class WithPlayerDuration extends React.PureComponent {
    constructor(props) {
      super(props);

      this._progressRef = React.createRef();
      this._toggleRef = React.createRef();

      // avoid memory leak
      this._isMounted = false;

      this.state = {
        timeLeft: 0,
        percentage: 0,
      };

      this._calculatePercentage = this._calculatePercentage.bind(this);
      this._calculateTimeLeft = this._calculateTimeLeft.bind(this);
    }

    componentDidMount() {
      this._isMounted = true;

      if (this._isMounted) {
        const video = this.props.videoRef.current;
        video.onloadedmetadata = () => this.setState({timeLeft: video.duration});
        video.ontimeupdate = () => {
          this._calculatePercentage(video.currentTime, video.duration);
          this._calculateTimeLeft(video.currentTime, video.duration);
        };
      }
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    render() {
      const {timeLeft, percentage} = this.state;
      const formattedTiming = formatTime(timeLeft, `second`, `HH:mm:ss`);

      return (
        <Component
          {...this.props}
          timing={formattedTiming}
          progressPosition={percentage}
          progressRef={this._progressRef}
          toggleRef={this._toggleRef}
        />
      );
    }

    _calculateTimeLeft(currentTime, duration) {
      const left = duration - currentTime;
      this.setState({timeLeft: left});
    }

    _calculatePercentage(currentTime, duration) {
      const percent = currentTime / duration * 100;
      this.setState({percentage: percent});
    }
  }

  WithPlayerDuration.defaultProps = {
    videoRef: {},
  };

  WithPlayerDuration.propTypes = {
    videoRef: PropTypes.object.isRequired,
  };

  const displayName = Component.displayName || Component.name;
  WithPlayerDuration.displayName = `WithPlayerDuration(${displayName})`;
  WithPlayerDuration.WrappedComponent = Component;

  return WithPlayerDuration;
};

export default withPlayerDuration;
