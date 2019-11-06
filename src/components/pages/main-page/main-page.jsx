import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import memoize from "memoize-one";

import Catalog from "../../partials/catalog/catalog";
import MovieCard from "../../partials/movie-card/movie-card";
import Footer from "../../partials/footer/footer";
import {DEFAULT_FILTER, MOVIES_COUNTER_INITIAL, MOVIES_COUNTER_STEP} from "../../../utils/constants";
import {getGenres, getFilteredMovies} from "../../../utils/utils";


class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: DEFAULT_FILTER,
      moviesCounter: MOVIES_COUNTER_INITIAL,
    };

    this._handleChangeFilter = this._handleChangeFilter.bind(this);
    this._handleShowMoreClick = this._handleShowMoreClick.bind(this);

    this.memoizedGenres = memoize((movies) => getGenres(movies));
    this.memoizedFilteredMovies = memoize((activeFilter) => getFilteredMovies(this.props.movies, activeFilter));
  }

  render() {
    const {movies, promoMovie} = this.props;
    const {activeFilter, moviesCounter} = this.state;

    const genres = this.memoizedGenres(movies);
    const filteredMovies = this.memoizedFilteredMovies(activeFilter);

    return (
      <>
        <MovieCard
          movie={promoMovie}
          isMainPage
        />

        <div className="page-content">
          <Catalog
            movies={filteredMovies}
            counter={moviesCounter}
            genres={genres}
            activeFilter={activeFilter}
            onChangeFilter={this._handleChangeFilter}
            onShowMoreClick={this._handleShowMoreClick}
            isMainPage
          />
          <Footer/>
        </div>
      </>
    );
  }

  _handleChangeFilter(genre) {
    this.setState({activeFilter: genre, moviesCounter: MOVIES_COUNTER_INITIAL});
  }

  _handleShowMoreClick() {
    this.setState((prevState) => ({moviesCounter: prevState.moviesCounter + MOVIES_COUNTER_STEP}));
  }
}

MainPage.defaultProps = {
  movies: [],
  promoMovie: {},
};

MainPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  promoMovie: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movies,
  promoMovie: state.promoMovie,
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
