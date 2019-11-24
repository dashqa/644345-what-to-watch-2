import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";

import {getMovieById, getRelatedMovies} from "@store/movies-data/selectors";

import Catalog from "@partials/catalog/catalog";
import Footer from "@partials/footer/footer";
import Header from "@partials/header/header";
import MovieCardBackground from "@partials/movie-card-background/movie-card-background";
import MovieCardPoster from "@partials/movie-card-poster/movie-card-poster";
import MovieCardTabs from "@partials/movie-card-tabs/movie-card-tabs";
import MovieCardInfo from "@partials/movie-card-info/movie-card-info";
import MovieButtons from "@partials/movie-buttons/movie-buttons";

import withLoading from "@hocs/with-loading/with-loading";

const MovieDetails = ({currentMovie, relatedMovies}) => {
  const {id, name, backgroundImage, posterImage, genre, released, backgroundColor, isFavorite} = currentMovie;
  return (
    <>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor}}
      >
        <div className="movie-card__hero">
          <MovieCardBackground
            name={name}
            backgroundImage={backgroundImage}
          />

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <MovieCardInfo
                name={name}
                genre={genre}
                released={released}
              />
              <MovieButtons
                movieId={id}
                isFavorite={isFavorite}
              />
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">

            <MovieCardPoster
              classMods="movie-card__poster--big"
              name={name}
              posterImage={posterImage}
            />

            <MovieCardTabs movie={currentMovie}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog movies={relatedMovies}/>
        <Footer/>
      </div>
    </>
  );
};

MovieDetails.defaultProps = {
  currentMovie: {},
  relatedMovies: [],
};

MovieDetails.propTypes = {
  currentMovie: PropTypes.object.isRequired,
  relatedMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state, {match}) => {
  const currentMovie = getMovieById(state, match.params.id);

  return {
    currentMovie,
    relatedMovies: getRelatedMovies(state, currentMovie),
  };
};

export {MovieDetails};

export default compose(
    withLoading,
    connect(mapStateToProps)
)(MovieDetails);
