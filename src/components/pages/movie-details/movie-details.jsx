import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getMovieById, getRelatedMovies, getFetching} from "@store/selectors";

import MovieCard from "@partials/movie-card/movie-card";
import Catalog from "@partials/catalog/catalog";
import Footer from "@partials/footer/footer";
import Loader from "@partials/loader/loader";

const MovieDetails = ({currentMovie, relatedMovies, isLoading}) => {

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <>
      <MovieCard movie={currentMovie}/>

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
  isLoading: false,
};

MovieDetails.propTypes = {
  currentMovie: PropTypes.object.isRequired,
  relatedMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state, {match}) => {
  const currentMovie = getMovieById(state, match.params.id);

  return {
    currentMovie,
    relatedMovies: getRelatedMovies(state, currentMovie),
    isLoading: getFetching(state),
  };
};

export {MovieDetails};
export default connect(mapStateToProps)(MovieDetails);
