import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import memoize from "memoize-one";

import Catalog from "../../partials/catalog/catalog.jsx";
import MovieCard from "../../partials/movie-card/movie-card.jsx";
import Footer from "../../partials/footer/footer.jsx";
import {DEFAULT_FILTER} from "../../../constants";
import {getGenres, getFilteredMovies} from "../../../utils";


class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: DEFAULT_FILTER,
    };

    this._handleChangeFilter = this._handleChangeFilter.bind(this);

    this.memoizedGenres = memoize((movies) => getGenres(movies));
    this.memoizedFilteredMovies = memoize((activeFilter) => getFilteredMovies(this.props.movies, activeFilter));
  }

  render() {
    const {movies, promoMovie} = this.props;
    const {activeFilter} = this.state;

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
            genres={genres}
            activeFilter={activeFilter}
            onChangeFilter={this._handleChangeFilter}
            isMainPage
          />
          <Footer/>
        </div>
      </>
    );
  }

  _handleChangeFilter(genre) {
    this.setState({activeFilter: genre});
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
