import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {MovieTabs} from "@constants";

import TabOverview from "@partials/tab-overview/tab-overview";
import TabDetails from "@partials/tab-details/tab-details";
import TabReviews from "@partials/tab-reviews/tab-reviews";

import withActiveTab from "@hocs/with-active-tab/with-active-tab";

const MovieCardTabs = ({active, onChangeTab, movie, comments}) => {
  const {genre, description, released, rating, scoresCount, runTime, director, starring} = movie;

  return (
    <div className="movie-card__desc">
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

      {(() => {
        switch (active) {
          case MovieTabs.OVERVIEW:
            return (
              <TabOverview
                rating={rating}
                scoresCount={scoresCount}
                description={description}
                director={director}
                starring={starring}
              />);
          case MovieTabs.DETAILS:
            return (
              <TabDetails
                runTime={runTime}
                genre={genre}
                released={released}
                director={director}
                starring={starring}
              />);
          case MovieTabs.REVIEWS:
            return (
              <TabReviews comments={comments}/>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
};

MovieCardTabs.defaultProps = {
  active: MovieTabs.OVERVIEW,
  onChangeTab: () => {},
  movie: {
    genre: ``,
    description: ``,
    released: 0,
    rating: 0,
    runTime: 0,
    director: ``,
    starring: [],
    scoresCount: 0,
  },
  comments: []
};

MovieCardTabs.propTypes = {
  active: PropTypes.string.isRequired,
  onChangeTab: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    genre: PropTypes.string,
    description: PropTypes.string,
    released: PropTypes.number,
    rating: PropTypes.number,
    runTime: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    scoresCount: PropTypes.number,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object)
};

export {MovieCardTabs};
export default withActiveTab(MovieCardTabs);
