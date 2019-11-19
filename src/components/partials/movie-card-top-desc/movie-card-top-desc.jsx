import React from "react";
import PropTypes from "prop-types";

import MovieButtons from "@partials/movie-buttons/movie-buttons";

const MovieCardTopDesc = ({name, genre, released}) => {
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>
      <MovieButtons/>
    </div>
  );
};

MovieCardTopDesc.defaultProps = {
  name: ``,
  genre: ``,
  released: 0,
};

MovieCardTopDesc.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
};

export default MovieCardTopDesc;
