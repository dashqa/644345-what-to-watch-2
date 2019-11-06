import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import CatalogCard from "../catalog-card/catalog-card";
import ShowMore from "../show-more/show-more";
import CatalogFilter from "../catalog-filter/catalog-filter";
import {DEFAULT_FILTER, MOVIES_COUNTER_INITIAL} from "../../../utils/constants";

const Catalog = ({movies, counter, genres, activeFilter, onChangeFilter, onShowMoreClick, isMainPage}) => {
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
        {movies.slice(0, counter).map((movie) =>
          <CatalogCard
            key={movie.id}
            movie={movie}
          />)}
      </div>

      {isMainPage && counter < movies.length &&
        <ShowMore onClick={onShowMoreClick}/>}
    </section>
  );
};

Catalog.defaultProps = {
  movies: [],
  counter: MOVIES_COUNTER_INITIAL,
  genres: {},
  activeFilter: DEFAULT_FILTER,
  isMainPage: false,
  onChangeFilter: () => {},
  onShowMoreClick: () => {}
};

Catalog.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isMainPage: PropTypes.bool.isRequired,
  counter: PropTypes.number,
  genres: PropTypes.object,
  activeFilter: PropTypes.string,
  onChangeFilter: PropTypes.func,
  onShowMoreClick: PropTypes.func,
};

export default Catalog;
