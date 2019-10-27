import React from "react";
import PropTypes from "prop-types";
import {FILTERS} from "../../constants";

const CatalogFilter = ({active}) => {
  return (
    <ul className="catalog__genres-list">
      {FILTERS.map((filter, i) => (
        <li
          key={`filter-${i}`}
          className={active === filter ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
          <a href="#" className="catalog__genres-link">{filter}</a>
        </li>
      ))}
    </ul>
  );
};

CatalogFilter.propTypes = {
  active: PropTypes.string.isRequired,
};

export default CatalogFilter;
