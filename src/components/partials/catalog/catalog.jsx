import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import CatalogCard from "../catalog-card/catalog-card.jsx";
import ShowMore from "../show-more/show-more.jsx";
import CatalogFilter from "../catalog-filter/catalog-filter.jsx";
import {DEFAULT_FILTER} from "../../../constants";

const Catalog = ({movies, genres, activeFilter, onChangeFilter, isMainPage}) => {
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

      {isMainPage && <ShowMore/>}
    </section>
  );
};

Catalog.defaultProps = {
  movies: [],
  genres: {},
  activeFilter: DEFAULT_FILTER,
  isMainPage: false,
  onChangeFilter: () => {}
};

Catalog.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isMainPage: PropTypes.bool.isRequired,
  genres: PropTypes.object,
  activeFilter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Catalog;
