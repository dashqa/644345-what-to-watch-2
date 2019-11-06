import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const MovieCardPoster = ({name, posterImage, isBig}) => {
  const classes = classNames(`movie-card__poster`, {'movie-card__poster--big': isBig});
  return (
    <div className={classes}>
      <img
        src={`${posterImage}`}
        alt={name}
        width="218"
        height="327"
      />
    </div>
  );
};

MovieCardPoster.defaultProps = {
  name: ``,
  posterImage: ``,
  isBig: false,
};

MovieCardPoster.propTypes = {
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  isBig: PropTypes.bool
};

export default MovieCardPoster;
