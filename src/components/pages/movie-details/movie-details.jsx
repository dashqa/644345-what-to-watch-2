import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../../partials/movie-card/movie-card.jsx";
import Catalog from "../../partials/catalog/catalog.jsx";
import Footer from "../../partials/footer/footer.jsx";

const MovieDetails = ({movie, relatedMovies}) => {
  return (
    <>
      <MovieCard movie={movie}/>

      <div className="page-content">
        <Catalog movies={relatedMovies}/>
        <Footer/>
      </div>
    </>
  );
};

MovieDetails.defaultProps = {
  movie: {},
  relatedMovies: [],
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
  relatedMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieDetails;
