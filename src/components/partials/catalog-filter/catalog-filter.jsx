import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {DEFAULT_FILTER} from "../../../utils/constants";


const CatalogFilter = ({active, genres, onChange}) => {
  return (
    <ul className="catalog__genres-list">
      {[...genres].map((genre) => {
        const classes = classNames(`catalog__genres-item`, {'catalog__genres-item--active': active === genre});

        return (
          <li
            key={genre}
            className={classes}
            onClick={() => onChange(genre)}>
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

CatalogFilter.defaultProps = {
  active: DEFAULT_FILTER,
  genres: {},
  onChange: () => {}
};

CatalogFilter.propTypes = {
  active: PropTypes.string.isRequired,
  genres: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CatalogFilter;
