import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import history from "@store/history";

import SvgButton from "@partials/svg-button/svg-button";
import {addToFavorite} from "@store/movies-data/actions";

class MovieButtons extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handlePlayClick = this._handlePlayClick.bind(this);
    this._handleAddMyListClick = this._handleAddMyListClick.bind(this);
  }

  render() {
    const {movieId, isFavorite} = this.props;

    return (
      <div className="movie-card__buttons">
        <SvgButton
          classes="btn btn-play movie-card__button"
          title="Play"
          svgXlink="#play-s"
          svgViewBox="0 0 19 19"
          svgWidth="19"
          svgHeight="19"
          onClick={this._handlePlayClick}
        />

        <SvgButton
          classes="btn btn-list movie-card__button"
          title="My list"
          svgXlink={isFavorite ? `#in-list` : `#add`}
          svgViewBox="0 0 19 20"
          svgWidth="19"
          svgHeight="20"
          onClick={this._handleAddMyListClick}
        />

        {location.pathname !== `/` &&
        <Link
          to={`/films/${movieId}/review`}
          className="btn movie-card__button"
        >
          Add review</Link>
        }
      </div>
    );
  }

  _handlePlayClick() {
    const {movieId} = this.props;
    history.push(`/films/${movieId}/player`);
  }

  _handleAddMyListClick() {
    const {onAddToFavorite, movieId, isFavorite} = this.props;
    onAddToFavorite(movieId, isFavorite);
  }
}

MovieButtons.defaultProps = {
  movieId: 0,
  isFavorite: false,
  onAddToFavorite: () => {},
};

MovieButtons.propTypes = {
  movieId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onAddToFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onAddToFavorite: bindActionCreators(addToFavorite, dispatch)
});

export {MovieButtons};

export default connect(null, mapDispatchToProps)(MovieButtons);
