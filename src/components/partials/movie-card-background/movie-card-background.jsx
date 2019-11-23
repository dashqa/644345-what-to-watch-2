import React from "react";
import PropTypes from "prop-types";

const MovieCardBackground = ({name, backgroundImage}) => {
  return (
    <div className="movie-card__bg">
      <img
        src={backgroundImage}
        alt={name}
      />
    </div>
  );
};

MovieCardBackground.defaultProps = {
  name: ``,
  backgroundImage: ``,
};

MovieCardBackground.propTypes = {
  name: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default MovieCardBackground;
