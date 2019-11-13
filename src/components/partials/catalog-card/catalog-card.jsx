import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

import VideoPlayer from "@partials/video-player/video-player";

class CatalogCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoTimeout = null;

    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);

    this.state = {
      isVideoPlaying: false,
    };
  }

  componentWillUnmount() {
    this._handleMouseLeave();
  }

  render() {
    const {id, name, previewImage, previewVideoLink} = this.props.movie;
    const {isVideoPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      >
        <Link
          to={`/films/${id}`}
          className="small-movie-card__link"
        >
          <div className="small-movie-card__image">
            <VideoPlayer
              link={previewVideoLink}
              poster={previewImage}
              isPlaying={isVideoPlaying}
              muted
              width="280"
              height="180"
            />
            <h3 className="small-movie-card__title">
              {name}
            </h3>
          </div>
        </Link>
      </article>
    );
  }

  _handleMouseEnter() {
    this._videoTimeout = setTimeout(() => {
      this.setState({isVideoPlaying: true});
    }, 1000);
  }

  _handleMouseLeave() {
    clearTimeout(this._videoTimeout);
    this.setState({isVideoPlaying: false});
  }
}

CatalogCard.defaultProps = {
  movie: {},
};

CatalogCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string
  }).isRequired,
};

export default CatalogCard;
