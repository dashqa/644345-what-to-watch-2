import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {MovieTabs} from "@constants";

const MovieCardTabs = ({active, onChangeTab}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.entries(MovieTabs).map(([key, title]) => {
          const classes = classNames(`movie-nav__item`, {'movie-nav__item--active': active === title});

          return (
            <li
              key={key}
              className={classes}
              onClick={() => onChangeTab(title)}
            >
              <a
                href="#"
                className="movie-nav__link"
                onClick={(evt) => evt.preventDefault()}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

MovieCardTabs.defaultProps = {
  active: MovieTabs.OVERVIEW,
  onChangeTab: () => {}
};

MovieCardTabs.propTypes = {
  active: PropTypes.string.isRequired,
  onChangeTab: PropTypes.func.isRequired
};

export default MovieCardTabs;
