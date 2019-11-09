import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import memoize from "memoize-one";

import MovieCard from "../../partials/movie-card/movie-card";
import Catalog from "../../partials/catalog/catalog";
import Footer from "../../partials/footer/footer";
import {getMovie, getRelatedMovies} from "../../../utils/utils";


class MovieDetails extends React.PureComponent {
  constructor(props) {
    super(props);

    const {movies} = this.props;
    this.memoizedCurrentMovie = memoize((movieId) => getMovie(movies, movieId));
    this.memoizedRelaitedMovies = memoize((movieId) => getRelatedMovies(movies, getMovie(movies, movieId)));
  }

  render() {
    const {movieId} = this.props;
    const currentMovie = this.memoizedCurrentMovie(movieId);
    const relatedMovies = this.memoizedRelaitedMovies(movieId);

    return (
      <>
        <MovieCard movie={currentMovie}/>

        <div className="page-content">
          <Catalog movies={relatedMovies}/>
          <Footer/>
        </div>
      </>
    );
  }
}

MovieDetails.defaultProps = {
  movies: [],
  movieId: null,
};

MovieDetails.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  movieId: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movies,
});

export {MovieDetails};
export default connect(mapStateToProps)(MovieDetails);
