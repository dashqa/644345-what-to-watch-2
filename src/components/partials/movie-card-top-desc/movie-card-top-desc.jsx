import React from "react";
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom';

import MovieButtons from "@partials/movie-buttons/movie-buttons";

class MovieCardTopDesc extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handlePlayClick = this._handlePlayClick.bind(this);
    this._handleAddMovieClick = this._handleAddMovieClick.bind(this);
  }

  render() {
    const {name, genre, released} = this.props;

    return (
      <div className="movie-card__desc">
        <h2 className="movie-card__title">{name}</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">{genre}</span>
          <span className="movie-card__year">{released}</span>
        </p>
        <MovieButtons
          onPlayClick={this._handlePlayClick}
          onAddMovieClick={this._handleAddMovieClick}
        />
      </div>
    );
  }

  _handlePlayClick() {
    const {id, history} = this.props;
    history.push(`/films/${id}/player`);
  }

  _handleAddMovieClick() {

  }
}

MovieCardTopDesc.defaultProps = {
  id: 0,
  name: ``,
  genre: ``,
  released: 0,
  history: {},
};

MovieCardTopDesc.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  history: PropTypes.object,
};

export default withRouter(MovieCardTopDesc);
