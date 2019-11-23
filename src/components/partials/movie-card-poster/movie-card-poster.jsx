import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const MovieCardPoster = ({name, posterImage, classMods}) => {
  const classes = classNames(`movie-card__poster`, classMods);
  return (
    <div className={classes}>
      <img
        src={posterImage}
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
  classMods: ``,
};

MovieCardPoster.propTypes = {
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  classMods: PropTypes.string,
};

export default MovieCardPoster;
