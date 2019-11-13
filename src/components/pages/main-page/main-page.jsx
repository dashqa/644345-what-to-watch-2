import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getPromoMovie, getFilteredMovies, getFetching} from "@store/selectors";

import Catalog from "@partials/catalog/catalog";
import MovieCard from "@partials/movie-card/movie-card";
import Footer from "@partials/footer/footer";
import Loader from "@partials/loader/loader";

const MainPage = ({movies, promoMovie, isLoading}) => {

  if (isLoading) {
    return <Loader/>;
  }

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
  isLoading: false,
};

MainPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  promoMovie: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getFilteredMovies(state),
  promoMovie: getPromoMovie(state),
  isLoading: getFetching(state)
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
