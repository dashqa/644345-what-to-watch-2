import React from "react";
import PropTypes from "prop-types";
import CatalogCard from "./catalog-card/catalog-card.jsx";
import ShowMore from "../show-more/show-more.jsx";
import CatalogFilter from "./catalog-filter/catalog-filter.jsx";

class Catalog extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: {},
      activeFilter: `All genres`
    };

    this._handleCardHover = this._handleCardHover.bind(this);
  }

  render() {
    const {movies, isMainCatalog} = this.props;
    const {activeFilter} = this.state;

    return (
      <section className={!isMainCatalog ? `catalog catalog--like-this` : `catalog`}>
        <h2 className={isMainCatalog ? `catalog__title visually-hidden` : `catalog__title`}>
          {isMainCatalog ? `Catalog` : `More like this`}
        </h2>

        {isMainCatalog && <CatalogFilter active={activeFilter}/>}

        <div className="catalog__movies-list">
          {movies.map((movie) =>
            <CatalogCard
              key={movie.id}
              movie={movie}
              onCardHover={this._handleCardHover}
            />)}
        </div>

        {isMainCatalog && <ShowMore/>}
      </section>
    );
  }

  _handleCardHover(movie) {
    this.setState({activeCard: movie});
  }
}

Catalog.propTypes = {
  movies: PropTypes.array.isRequired,
  isMainCatalog: PropTypes.bool.isRequired
};

export default Catalog;
