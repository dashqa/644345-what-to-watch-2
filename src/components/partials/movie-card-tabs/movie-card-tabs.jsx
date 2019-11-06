import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {MOVIE_TABS} from "../../../utils/constants";

const MovieCardTabs = ({active, onChangeTab}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.entries(MOVIE_TABS).map(([key, title]) => {
          const classes = classNames(`movie-nav__item`, {'movie-nav__item--active': active === key});

          return (
            <li
              key={key}
              className={classes}
              onClick={() => onChangeTab(key)}
            >
              <a href="#" className="movie-nav__link">{title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

MovieCardTabs.defaultProps = {
  active: `overview`,
  onChangeTab: () => {}
};

MovieCardTabs.propTypes = {
  active: PropTypes.string.isRequired,
  onChangeTab: PropTypes.func.isRequired
};

export default MovieCardTabs;
