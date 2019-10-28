import React, {Fragment} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import MovieCardTop from "../movie-card-top/movie-card-top.jsx";
import MovieCardBottom from "../movie-card-bottom/movie-card-bottom.jsx";

const MovieCard = ({movie, isPromoMovie}) => {
  return (
    <section className={classNames(`movie-card`, {'movie-card--full': !isPromoMovie})}>
      {isPromoMovie ? (
        <MovieCardTop
          movie={movie}
          isPromoMovie={isPromoMovie}
        />
      ) : (
        <Fragment>
          <div className="movie-card__hero">
            <MovieCardTop
              movie={movie}
              isPromoMovie={isPromoMovie}
            />
          </div>

          <MovieCardBottom movie={movie}/>
        </Fragment>
      )}
    </section>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  isPromoMovie: PropTypes.bool.isRequired,
};

export default MovieCard;
