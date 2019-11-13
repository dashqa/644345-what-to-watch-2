import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {setActiveFilter, setMoviesCounter} from "@store/actions";
import {getActiveFilter, getGenres, getMoviesCounter} from "@store/selectors";
import {DEFAULT_FILTER, MOVIES_COUNTER_INITIAL} from "@constants";

import CatalogCard from "@partials/catalog-card/catalog-card";
import ShowMore from "@partials/show-more/show-more";
import CatalogFilter from "@partials/catalog-filter/catalog-filter";

const Catalog = ({movies, genres, activeFilter, moviesCounter, onChangeFilter, onShowMoreClick, isMainPage}) => {
  const sectionClasses = classNames(`catalog`, {'catalog--like-this': !isMainPage});
  const headerClasses = classNames(`catalog__title`, {'visually-hidden': isMainPage});

  return (
    <section className={sectionClasses}>
      <h2 className={headerClasses}>
        {isMainPage ? `Catalog` : `More like this`}
      </h2>

      {isMainPage &&
          <CatalogFilter
            active={activeFilter}
            genres={genres}
            onChange={onChangeFilter}
          />}

      <div className="catalog__movies-list">
        {movies.map((movie) =>
          <CatalogCard
            key={movie.id}
            movie={movie}
          />)}
      </div>

      {isMainPage && moviesCounter <= movies.length &&
        <ShowMore onClick={onShowMoreClick}/>}
    </section>
  );
};

Catalog.defaultProps = {
  movies: [],
  genres: {},
  moviesCounter: MOVIES_COUNTER_INITIAL,
  activeFilter: DEFAULT_FILTER,
  isMainPage: false,
  onChangeFilter: () => {},
  onShowMoreClick: () => {}
};

Catalog.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isMainPage: PropTypes.bool.isRequired,
  moviesCounter: PropTypes.number,
  genres: PropTypes.object,
  activeFilter: PropTypes.string,
  onChangeFilter: PropTypes.func,
  onShowMoreClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  genres: getGenres(state),
  activeFilter: getActiveFilter(state),
  moviesCounter: getMoviesCounter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: bindActionCreators(setActiveFilter, dispatch),
  onShowMoreClick: bindActionCreators(setMoviesCounter, dispatch)
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
