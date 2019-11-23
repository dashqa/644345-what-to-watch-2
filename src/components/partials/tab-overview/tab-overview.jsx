import React, {useMemo} from "react";
import PropTypes from "prop-types";
import {computeRatingLevel} from "@utils";

const TabOverview = ({rating, scoresCount, description, director, starring}) => {
  const ratingLevel = useMemo(() => computeRatingLevel(rating), [rating]);
  const formattedStarring = starring.join(`, `);

  return (
      <>
        <div className="movie-rating">
          <div className="movie-rating__score">{rating}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{ratingLevel}</span>
            <span className="movie-rating__count">{scoresCount} ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          <p>{description}</p>
          <p className="movie-card__director"><strong>Director: {director}</strong></p>
          <p className="movie-card__starring"><strong>Starring: {formattedStarring}</strong></p>
        </div>
      </>
  );
};

TabOverview.deafultProps = {
  rating: 0,
  scoresCount: 0,
  description: ``,
  director: ``,
  starring: [],
};

TabOverview.propTypes = {
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TabOverview;
