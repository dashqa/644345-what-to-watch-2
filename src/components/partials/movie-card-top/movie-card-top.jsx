import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import MovieCardTopDesc from "../movie-card-top-desc/movie-card-top-desc.jsx";
import MovieCardPoster from "../movie-card-poster/movie-card-poster.jsx";

const MovieCardTop = ({movie, isMainPage}) => {
  const {name, backgroundImage, posterImage, genre, released} = movie;

  return (
    <>
      <div className="movie-card__bg">
        <img
          src={`/${backgroundImage}`}
          alt={name}
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>

      <Header/>

      <div className="movie-card__wrap">
        {isMainPage ? (
          <div className="movie-card__info">
            <MovieCardPoster
              name={name}
              posterImage={posterImage}
            />

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
    </>
  );
};

MovieCardTop.defaultProps = {
  movie: {
    name: ``,
    genre: ``,
    released: 0,
    backgroundImage: ``,
    posterImage: ``,
  },
  isMainPage: false,
};

MovieCardTop.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
  }).isRequired,
  isMainPage: PropTypes.bool.isRequired,
};

export default MovieCardTop;
