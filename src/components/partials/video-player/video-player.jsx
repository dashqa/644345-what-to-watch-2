import React from "react";
import PropTypes from "prop-types";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.load();
    } else {
      video.play();
    }
  }

  render() {
    const {poster, link, width, height, controls, muted} = this.props;
    return (
      <video
        ref={this._videoRef}
        poster={poster}
        controls={controls}
        width={width}
        height={height}
        muted={muted}
      >
        <source src={link} type="video/mp4"/>
      </video>
    );
  }
}

VideoPlayer.defaultProps = {
  poster: ``,
  link: ``,
  width: ``,
  height: ``,
  controls: false,
  muted: false,
  isPlaying: false,
};

VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  controls: PropTypes.bool,
  muted: PropTypes.bool,
  isPlaying: PropTypes.bool,
};

export default VideoPlayer;
