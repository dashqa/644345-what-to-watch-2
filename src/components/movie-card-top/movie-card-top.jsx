import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import MovieCardTopDesc from "../movie-card-top-desc/movie-card-top-desc.jsx";

const MovieCardTop = ({movie, isPromoMovie}) => {
  const {name, backgroundImage, posterImage, genre, released} = movie;

  return (
    <Fragment>
      <div className="movie-card__bg">
        <img
          src={`/${backgroundImage}`}
          alt={name}
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>

      <Header/>

      <div className="movie-card__wrap">
        {isPromoMovie ? (
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img
                src={`/${posterImage}`}
                alt={`${name} poster`}
                width="218"
                height="327"
              />
            </div>

            <MovieCardTopDesc
              name={name}
              genre={genre}
              released={released}
            />
          </div>
        ) : (
          <MovieCardTopDesc
            name={name}
            genre={genre}
            released={released}
          />
        )}
      </div>
    </Fragment>
  );
};

MovieCardTop.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
  }).isRequired,
  isPromoMovie: PropTypes.bool.isRequired,
};

export default MovieCardTop;
