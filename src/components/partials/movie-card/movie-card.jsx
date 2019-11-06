import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import MovieCardTop from "../movie-card-top/movie-card-top";
import MovieCardBottom from "../movie-card-bottom/movie-card-bottom";

const MovieCard = ({movie, isMainPage}) => {
  const sectionClasses = classNames(`movie-card`, {'movie-card--full': !isMainPage});

  return (
    <section
      className={sectionClasses}
      style={{backgroundColor: movie.backgroundColor}}
    >
      {isMainPage ? (
        <MovieCardTop
          movie={movie}
          isMainPage={isMainPage}/>
      ) : (
        <>
          <div className="movie-card__hero">
            <MovieCardTop
              movie={movie}
              isMainPage={isMainPage}/>
          </div>

          <MovieCardBottom movie={movie}/>
        </>
      )}
    </section>
  );
};

MovieCard.defaultProps = {
  movie: [],
  isMainPage: false,
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  isMainPage: PropTypes.bool.isRequired,
};

export default MovieCard;
