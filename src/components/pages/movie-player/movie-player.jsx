import React from "react";
import {compose} from "recompose";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Fetch} from "@constants";
import {getMovieById} from "@store/movies-data/selectors";

import SvgButton from "@partials/svg-button/svg-button";
import VideoPlayer from "@partials/video-player/video-player";
import VideoPlayerProgress from "@partials/video-player-progress/video-player-progress";

import withPlayerFunctionality from "@hocs/with-player-functionality/with-player-functionality";
import withLoaded from "@hocs/with-loaded/with-loaded";

const MoviePlayer = ({currentMovie, videoRef, onPlayPause, onClosePlayer, onFullScreen, isPlaying}) => {
  const {name, videoLink, previewImage} = currentMovie;
  return (
    <div className="player">
      <VideoPlayer
        videoRef={videoRef}
        classes="player__video"
        link={videoLink}
        poster={previewImage}
        width="100%"
        height="100%"
      />

      <button
        type="button"
        className="player__exit"
        onClick={onClosePlayer}
      >
        Exit</button>

      <div className="player__controls">
        <VideoPlayerProgress
          videoRef={videoRef}
        />

        <div className="player__controls-row">
          <SvgButton
            classes="player__play"
            title="Play"
            svgXlink={isPlaying ? `#pause` : `#play-s`}
            svgViewBox="0 0 19 19"
            svgWidth="19"
            svgHeight="19"
            onClick={onPlayPause}
          />
          <div className="player__name">{name}</div>

          <SvgButton
            classes="player__full-screen"
            title="Full screen"
            svgXlink="#full-screen"
            svgViewBox="0 0 27 27"
            svgWidth="27"
            svgHeight="27"
            onClick={onFullScreen}
          />
        </div>
      </div>
    </div>
  );
};

MoviePlayer.defaultProps = {
  currentMovie: {
    name: ``,
    videoLink: ``,
    previewImage: ``,
    runTime: 0,
  },
  videoRef: {},
  onPlayPause: () => {},
  onClosePlayer: () => {},
  onFullScreen: () => {},
  isPlaying: false,
};

MoviePlayer.propTypes = {
  currentMovie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired,
  }).isRequired,
  videoRef: PropTypes.object.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onClosePlayer: PropTypes.func.isRequired,
  onFullScreen: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, {match}) => ({
  currentMovie: getMovieById(state, match.params.id)
});

export {MoviePlayer};

export default compose(
    connect(mapStateToProps),
    withPlayerFunctionality,
    withLoaded(Fetch.MOVIES)
)(MoviePlayer);
