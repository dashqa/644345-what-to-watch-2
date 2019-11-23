import React from "react";
import PropTypes from "prop-types";

const MovieCardInfo = ({name, genre, released}) => {
  return (
    <>
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>
    </>
  );
};

MovieCardInfo.defaultProps = {
  name: ``,
  genre: ``,
  released: 0,
};

MovieCardInfo.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
};

export default MovieCardInfo;
