import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {FILTERS} from "../../../constants";

const CatalogFilter = ({active}) => {
  return (
    <ul className="catalog__genres-list">
      {FILTERS.map(({id, title}) => (
        <li
          key={id}
          className={classNames(`catalog__genres-item`, {'catalog__genres-item--active': active === id})}>
          <a href="#" className="catalog__genres-link">{title}</a>
        </li>
      ))}
    </ul>
  );
};

CatalogFilter.propTypes = {
  active: PropTypes.string.isRequired,
};

export default CatalogFilter;
