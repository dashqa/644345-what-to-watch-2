import React from "react";
import PropTypes from "prop-types";

const CatalogCard = ({movie, onCardHover}) => {
  const {name, previewImage} = movie;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onCardHover(movie)}
    >
      <div className="small-movie-card__image">
        <img
          src={previewImage}
          alt={name}
          width="280"
          height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};


CatalogCard.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired
  }).isRequired,
  onCardHover: PropTypes.func.isRequired
};

export default CatalogCard;
