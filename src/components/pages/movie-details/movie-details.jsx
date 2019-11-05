import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../../partials/movie-card/movie-card.jsx";
import Catalog from "../../partials/catalog/catalog.jsx";
import Footer from "../../partials/footer/footer.jsx";
import {connect} from "react-redux";

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
  isMainPage: false,
};

MovieDetails.propTypes = {
  currentMovie: PropTypes.object.isRequired,
  relatedMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isMainPage: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentMovie: state.currentMovie,
  relatedMovies: state.relatedMovies,
  isMainPage: state.isMainPage,
});

export {MovieDetails};
export default connect(mapStateToProps)(MovieDetails);
