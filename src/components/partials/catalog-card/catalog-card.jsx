import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

import VideoPlayer from "@partials/video-player/video-player";

const CatalogCard = ({movie, onEnter, onLeave, isVideoPlaying}) => {
  const {id, name, previewImage, previewVideoLink} = movie;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
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
};

CatalogCard.defaultProps = {
  movie: {},
  onEnter: () => {},
  onLeave: () => {},
  isVideoPlaying: false,
};

CatalogCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string
  }).isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired,
};

export default CatalogCard;
