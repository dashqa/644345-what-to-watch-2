import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {FILTERS} from "../../../constants";

const CatalogFilter = ({active}) => {
  return (
    <ul className="catalog__genres-list">
      {Object.entries(FILTERS).map(([key, title]) => {
        const classes = classNames(`catalog__genres-item`, {'catalog__genres-item--active': active === key});

        return (
          <li
            key={key}
            className={classes}>
            <a href="#" className="catalog__genres-link">{title}</a>
          </li>
        );
      })}
    </ul>
  );
};

CatalogFilter.defaultProps = {
  active: `all`,
};

CatalogFilter.propTypes = {
  active: PropTypes.string.isRequired,
};

export default CatalogFilter;
