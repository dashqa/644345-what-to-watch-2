import React from "react";
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

const MainPage = ({movies, promoMovie}) => {
  const {id, name, posterImage, backgroundImage, genre, released, isFavorite} = promoMovie;
  return (
    <>
      <section className="movie-card">
        <MovieCardBackground
          name={name}
          backgroundImage={backgroundImage}
        />
        <h1 className="visually-hidden">WTW</h1>

        <Header
          classMods="movie-card__head"
          needUserBlock
        />

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
                isFavorite={isFavorite}
              />
            </div>
          </div>
        </div>
      </section>

        <div className="page-content">
          <Catalog
            movies={movies}
            headerClassMods="visually-hidden"
            sectionTitle="Catalog"
            needFilter
            needShowMore
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
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string
  })).isRequired,
  promoMovie: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string
  }).isRequired,
};

const mapStateToProps = (state) => ({
  movies: getFilteredMovies(state),
  promoMovie: getPromoMovie(state),
});

export {MainPage};

export default connect(mapStateToProps)(MainPage);
