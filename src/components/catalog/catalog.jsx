import React from "react";
import PropTypes from "prop-types";
import CatalogCard from "./../catalog-card/catalog-card.jsx";
import {FILTERS} from "./../../constants";

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
    const {movies} = this.props;
    return (
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ul className="catalog__genres-list">
          {FILTERS.map((filter, i) => (
            <li
              key={`filter-${i}`}
              className={`catalog__genres-item ` + (this.state.activeFilter === filter ? `catalog__genres-item--active` : ``)}>
              <a href="#" className="catalog__genres-link">{filter}</a>
            </li>
          ))}
        </ul>

        <div className="catalog__movies-list">
          {movies.map((movie) =>
            <CatalogCard
              key={movie.id}
              movie={movie}
              onCardHover={this._handleCardHover}
            />)}
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
    );
  }

  _handleCardHover(movie) {
    this.setState({activeCard: movie});
  }
}

Catalog.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Catalog;
