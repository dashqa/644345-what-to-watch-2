import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import history from "@store/history";

import SvgButton from "@partials/svg-button/svg-button";

const MovieButtons = ({movieId}) => {
  return (
    <div className="movie-card__buttons">
      <SvgButton
        classes="btn btn-play movie-card__button"
        title="Play"
        svgXlink="#play-s"
        svgViewBox="0 0 19 19"
        svgWidth="19"
        svgHeight="19"
        onClick={() => history.push(`/films/${movieId}/player`)}
      />

      <SvgButton
        classes="btn btn-list movie-card__button"
        title="My list"
        svgXlink="#add"
        svgViewBox="0 0 19 20"
        svgWidth="19"
        svgHeight="20"
        onClick={() => history.push(`/my-list`)}
      />

      {location.pathname !== `/` &&
        <Link
          to={`/films/${movieId}/review`}
          className="btn movie-card__button"
        >
          Add review</Link>
      }
    </div>
  );
};

MovieButtons.defaultProps = {
  movieId: 0,
};

MovieButtons.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieButtons;
