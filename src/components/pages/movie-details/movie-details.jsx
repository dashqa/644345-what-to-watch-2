import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getMovieById, getRelatedMovies} from "@store/selectors";

import MovieCard from "@partials/movie-card/movie-card";
import Catalog from "@partials/catalog/catalog";
import Footer from "@partials/footer/footer";

const MovieDetails = ({currentMovie, relatedMovies}) => {
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
export default connect(mapStateToProps)(MovieDetails);
