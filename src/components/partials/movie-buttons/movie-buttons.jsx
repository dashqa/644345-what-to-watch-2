import React from "react";

import SvgButton from "@partials/svg-button/svg-button";

class MovieButtons extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
    this._handleMyListButtonClick = this._handleMyListButtonClick.bind(this);
  }

  render() {
    return (
      <div className="movie-card__buttons">
        <SvgButton
          classMods="btn-play"
          title="Play"
          svgXlink="#play-s"
          svgViewBox="0 0 19 19"
          svgWidth="19"
          svgHeight="19"
          onClick={this._handlePlayButtonClick}
        />

        <SvgButton
          classMods="btn-list"
          title="My list"
          svgXlink="#add"
          svgViewBox="0 0 19 20"
          svgWidth="19"
          svgHeight="20"
          onClick={this._handleMyListButtonClick}
        />

        {location.pathname !== `/` &&
          <a href="add-review.html" className="btn movie-card__button">Add review</a>
        }
      </div>
    );
  }

  _handlePlayButtonClick() {}
  _handleMyListButtonClick() {}
}

export default MovieButtons;
