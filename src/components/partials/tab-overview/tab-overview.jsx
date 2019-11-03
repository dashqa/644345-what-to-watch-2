import React from "react";
import PropTypes from "prop-types";
import {USER_RATINGS} from "../../../constants";
import memoize from "memoize-one";

class TabOverview extends React.PureComponent {
  constructor(props) {
    super(props);

    this.memoizedRatingLevel = memoize((rating) => USER_RATINGS.filter((rank) => rank.minRating <= rating).pop().title);
  }

  render() {
    const {rating, scoresCount, description, director, starring} = this.props;
    const ratingLevel = this.memoizedRatingLevel(rating);

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
          <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
        </div>
      </>
    );
  }
}

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
