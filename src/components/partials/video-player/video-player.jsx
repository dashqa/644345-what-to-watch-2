import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = ({classes, poster, link, width, height, controls, muted, videoRef}) => {
  return (
    <video
      className={classes}
      ref={videoRef}
      poster={poster}
      controls={controls}
      width={width}
      height={height}
      muted={muted}
    >
      <source src={link} type="video/mp4"/>
    </video>
  );
};

VideoPlayer.defaultProps = {
  classes: ``,
  poster: ``,
  link: ``,
  width: ``,
  height: ``,
  controls: false,
  muted: false,
  videoRef: null,
};

VideoPlayer.propTypes = {
  classes: PropTypes.string,
  poster: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  controls: PropTypes.bool,
  muted: PropTypes.bool,
  videoRef: PropTypes.object,
};

export default VideoPlayer;
