import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import MovieCardTop from "../movie-card-top/movie-card-top.jsx";
import MovieCardBottom from "../movie-card-bottom/movie-card-bottom.jsx";

const MovieCard = ({movie, isPromoMovie}) => {
  const sectionClasses = classNames(`movie-card`, {'movie-card--full': !isPromoMovie});

  return (
    <section className={sectionClasses}>
      {isPromoMovie ? (
        <MovieCardTop
          movie={movie}
          isPromoMovie/>
      ) : (
        <>
          <div className="movie-card__hero">
            <MovieCardTop
              movie={movie}
              isPromoMovie/>
          </div>

          <MovieCardBottom movie={movie}/>
        </>
      )}
    </section>
  );
};

MovieCard.defaultProps = {
  movie: [],
  isPromoMovie: false,
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  isPromoMovie: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default MovieCard;
