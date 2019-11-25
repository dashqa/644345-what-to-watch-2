import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {DEFAULT_FILTER, MOVIES_COUNTER_INITIAL} from "@constants";

import {setActiveFilter, increaseMoviesCounter} from "@store/movies-data/actions";
import {getActiveFilter, getGenres, getMoviesCounter} from "@store/movies-data/selectors";

import CatalogCard from "@partials/catalog-card/catalog-card";
import ShowMore from "@partials/show-more/show-more";
import CatalogFilter from "@partials/catalog-filter/catalog-filter";

const Catalog = (
    {movies,
      genres,
      activeFilter,
      moviesCounter,
      onChangeFilter,
      onShowMoreClick,
      sectionClassMods,
      headerClassMods,
      sectionTitle,
      needFilter,
      needShowMore
    }) => {
  const sectionClasses = classNames(`catalog`, sectionClassMods);
  const headerClasses = classNames(`catalog__title`, headerClassMods);

  return (
    <section className={sectionClasses}>
      <h2 className={headerClasses}>{sectionTitle}</h2>

      {needFilter &&
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

      {needShowMore && moviesCounter <= movies.length &&
        <ShowMore onClick={onShowMoreClick}/>}
    </section>
  );
};

Catalog.defaultProps = {
  movies: [],
  genres: new Set([DEFAULT_FILTER]),
  moviesCounter: MOVIES_COUNTER_INITIAL,
  activeFilter: DEFAULT_FILTER,
  onChangeFilter: () => {},
  onShowMoreClick: () => {},
  sectionClassMods: ``,
  headerClassMods: ``,
  sectionTitle: ``,
  needFilter: false,
  needShowMore: false,
};

Catalog.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  moviesCounter: PropTypes.number,
  genres: PropTypes.object,
  activeFilter: PropTypes.string,
  onChangeFilter: PropTypes.func,
  onShowMoreClick: PropTypes.func,
  sectionClassMods: PropTypes.string,
  headerClassMods: PropTypes.string,
  sectionTitle: PropTypes.string,
  needFilter: PropTypes.bool,
  needShowMore: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  genres: getGenres(state),
  activeFilter: getActiveFilter(state),
  moviesCounter: getMoviesCounter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: bindActionCreators(setActiveFilter, dispatch),
  onShowMoreClick: bindActionCreators(increaseMoviesCounter, dispatch)
});

export {Catalog};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
