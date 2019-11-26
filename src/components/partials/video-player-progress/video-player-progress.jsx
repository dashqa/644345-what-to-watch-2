import React from "react";
import PropTypes from "prop-types";

import withPlayerDuration from "@hocs/with-player-duration/with-player-duration";

const VideoPlayerProgress = ({progressPosition, progressRef, toggleRef, timing}) => {
  const toggleStyles = {
    left: `${progressPosition}%`
  };

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress
          ref={progressRef}
          value={progressPosition}
          className="player__progress"
          max="100">
        </progress>
        <div
          ref={toggleRef}
          className="player__toggler"
          style={toggleStyles}
        >
          Toggler</div>
      </div>
      <div className="player__time-value">{timing}</div>
    </div>
  );
};

VideoPlayerProgress.defaultProps = {
  progressPosition: 0,
  progressRef: {},
  toggleRef: {},
  timing: ``,
};

VideoPlayerProgress.propTypes = {
  progressPosition: PropTypes.number.isRequired,
  progressRef: PropTypes.object.isRequired,
  toggleRef: PropTypes.object.isRequired,
  timing: PropTypes.string.isRequired,
};

export {VideoPlayerProgress};

export default withPlayerDuration(VideoPlayerProgress);
