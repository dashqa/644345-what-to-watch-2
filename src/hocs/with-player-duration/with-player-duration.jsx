import React from "react";
import PropTypes from "prop-types";
import {formatTime} from "@utils";

const withPlayerDuration = (Component) => {
  class WithPlayerDuration extends React.PureComponent {
    constructor(props) {
      super(props);

      this._progressRef = React.createRef();
      this._toggleRef = React.createRef();
      this._video = null;

      this.state = {
        timeLeft: 0,
        percentage: 0,
      };

      this._calculatePercentage = this._calculatePercentage.bind(this);
      this._calculateTimeLeft = this._calculateTimeLeft.bind(this);
    }

    componentDidMount() {
      this._video = this.props.videoRef.current;

      if (this._video) {
        this._video.onloadedmetadata = () => this.setState({timeLeft: this._video.duration});
        this._video.ontimeupdate = () => {
          this._calculatePercentage(this._video.currentTime, this._video.duration);
          this._calculateTimeLeft(this._video.currentTime, this._video.duration);
        };
      }
    }

    componentWillUnmount() {
      if (this._video) {
        this._video.onloadedmetadata = null;
        this._video.ontimeupdate = null;
      }
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

  return WithPlayerDuration;
};

export default withPlayerDuration;
