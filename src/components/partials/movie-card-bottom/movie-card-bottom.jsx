import React from "react";
import PropTypes from "prop-types";

import MovieCardPoster from "@partials/movie-card-poster/movie-card-poster";
import MovieCardTabs from "@partials/movie-card-tabs/movie-card-tabs";

import withActiveTab from "@hocs/with-active-tab/with-active-tab";
const MovieCardTabsWrapped = withActiveTab(MovieCardTabs);

const MovieCardBottom = ({movie}) => {
  const {name, posterImage} = movie;

  return (
    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">

        <MovieCardPoster
          name={name}
          posterImage={posterImage}
          isBig
        />

        <MovieCardTabsWrapped movie={movie}/>
      </div>
    </div>
  );
};

MovieCardBottom.defaultProps = {
  movie: {
    name: ``,
    posterImage: ``,
  },
};

MovieCardBottom.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCardBottom;
