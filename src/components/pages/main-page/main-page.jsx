import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";

import {getPromoMovie, getFilteredMovies} from "@store/movies-data/selectors";
import withLoading from "@hocs/with-loading/with-loading";

import Catalog from "@partials/catalog/catalog";
import MovieCard from "@partials/movie-card/movie-card";
import Footer from "@partials/footer/footer";

const MainPage = ({movies, promoMovie}) => {
  return (
    <>
      <MovieCard
        movie={promoMovie}
        isMainPage
      />

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
