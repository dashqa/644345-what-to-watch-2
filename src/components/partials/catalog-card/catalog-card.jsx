import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

import VideoPlayer from "@partials/video-player/video-player";
import withPlayOnHover from "@hocs/with-play-on-hover/with-play-on-hover";

const CatalogCard = ({movie, videoRef, onEnter, onLeave}) => {
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
            videoRef={videoRef}
            link={previewVideoLink}
            poster={previewImage}
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
  videoRef: {},
  onEnter: () => {},
  onLeave: () => {},
};

CatalogCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string
  }).isRequired,
  videoRef: PropTypes.object.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export {CatalogCard};
export default withPlayOnHover(CatalogCard);
