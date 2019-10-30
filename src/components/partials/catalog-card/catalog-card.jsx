import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const CatalogCard = ({movie, onCardHover}) => {
  const {id, name, previewImage} = movie;
  const moviePath = `/films/${id}`;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onCardHover(movie)}
      onClick={() => (location.href = moviePath)}
    >
      <div className="small-movie-card__image">
        <img
          src={`/${previewImage}`}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link
          to={moviePath}
          className="small-movie-card__link"
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};

CatalogCard.defaultProps = {
  movie: {},
  onCardHover: () => {},
};


CatalogCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired
  }).isRequired,
  onCardHover: PropTypes.func.isRequired
};

export default CatalogCard;