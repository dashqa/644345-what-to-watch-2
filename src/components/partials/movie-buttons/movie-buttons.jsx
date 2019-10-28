import React from "react";
import UIButton from "../UI-button/UI-button.jsx";

class MovieButtons extends React.PureComponent {
  constructor(props) {
    super(props);

    this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
    this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
  }

  render() {
    return (
      <div className="movie-card__buttons">
        <UIButton
          classMods={[`btn-play`]}
          svgViewBox={`0 0 19 19`}
          svgWidth={19}
          svgHeight={19}
          svg={`#play-s`}
          title={`Play`}
          onButtonClick={this._handlePlayButtonClick}
        />

        <UIButton
          classMods={[`btn-list`]}
          svgViewBox={`0 0 19 20`}
          svgWidth={19}
          svgHeight={20}
          svg={`#add`}
          title={`My list`}
          onButtonClick={this._handleMyListButtonClick}
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
