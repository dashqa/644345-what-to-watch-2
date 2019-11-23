import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {getFilteredMovies, getPromoMovie} from "@store/movies-data/selectors";

import Header from "@partials/header/header";
import MovieCardBackground from "@partials/movie-card-background/movie-card-background";
import MovieCardPoster from "@partials/movie-card-poster/movie-card-poster";
import MovieCardInfo from "@partials/movie-card-info/movie-card-info";
import MovieButtons from "@partials/movie-buttons/movie-buttons";
import Catalog from "@partials/catalog/catalog";
import Footer from "@partials/footer/footer";

import withLoading from "@hocs/with-loading/with-loading";

const MainPage = ({movies, promoMovie}) => {
  const {id, name, posterImage, backgroundImage, genre, released} = promoMovie;
  return (
    <>
      <section className="movie-card">
        <MovieCardBackground
          name={name}
          backgroundImage={backgroundImage}
        />
        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">

            <MovieCardPoster
              name={name}
              posterImage={posterImage}
            />

            <div className="movie-card__desc">
              <MovieCardInfo
                name={name}
                genre={genre}
                released={released}
              />
              <MovieButtons
                movieId={id}
              />
            </div>
          </div>
        </div>
      </section>

        <div className="page-content">
          <Catalog
            movies={movies}
            isMainPage
          />

          <Footer/>
        </div>
    </>
  );
};

MainPage.defaultProps = {
  movies: [],
  promoMovie: {},
};

MainPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  promoMovie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getFilteredMovies(state),
  promoMovie: getPromoMovie(state),
});

export {MainPage};

export default compose(
    withLoading,
    connect(mapStateToProps)
)(MainPage);
