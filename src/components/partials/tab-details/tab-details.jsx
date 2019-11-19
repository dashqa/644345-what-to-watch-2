import React from "react";
import PropTypes from "prop-types";
import moment from "moment/moment";
import 'moment-duration-format';

const TabDetails = ({runTime, genre, released, director, starring}) => {
  const formattedRunTime = moment.duration(runTime, `minutes`).format(`h[h] m[m]`);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span
            className="movie-card__details-value"
            dangerouslySetInnerHTML={{__html: starring.join(`</br>`)}}>
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{formattedRunTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

TabDetails.deafultProps = {
  runTime: 0,
  genre: ``,
  released: 0,
  director: ``,
  starring: [],
};

TabDetails.propTypes = {
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TabDetails;
