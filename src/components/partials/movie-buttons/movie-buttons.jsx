import React from "react";
import PropTypes from "prop-types";

import SvgButton from "@partials/svg-button/svg-button";

const MovieButtons = ({onPlayClick, onAddMovieClick}) => {
  return (
    <div className="movie-card__buttons">
      <SvgButton
        classes="btn btn-play movie-card__button"
        title="Play"
        svgXlink="#play-s"
        svgViewBox="0 0 19 19"
        svgWidth="19"
        svgHeight="19"
        onClick={onPlayClick}
      />

      <SvgButton
        classes="btn btn-list movie-card__button"
        title="My list"
        svgXlink="#add"
        svgViewBox="0 0 19 20"
        svgWidth="19"
        svgHeight="20"
        onClick={onAddMovieClick}
      />

      {location.pathname !== `/` &&
          <a href="add-review.html" className="btn movie-card__button">Add review</a>
      }
    </div>
  );
};

MovieButtons.defaultProps = {
  onPlayClick: () => {},
  onAddMovieClick: () => {}
};

MovieButtons.propTypes = {
  onPlayClick: PropTypes.func.isRequired,
  onAddMovieClick: PropTypes.func.isRequired,
};

export default MovieButtons;
