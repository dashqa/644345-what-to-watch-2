import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {connect} from "react-redux";
import CatalogCard from "../catalog-card/catalog-card.jsx";
import ShowMore from "../show-more/show-more.jsx";
import CatalogFilter from "../catalog-filter/catalog-filter.jsx";
import {getFilteredMovies} from "../../../store/actions";

class Catalog extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, isMainPage} = this.props;
    const sectionClasses = classNames(`catalog`, {'catalog--like-this': !isMainPage});
    const headerClasses = classNames(`catalog__title`, {'visually-hidden': isMainPage});

    return (
      <section className={sectionClasses}>
        <h2 className={headerClasses}>
          {isMainPage ? `Catalog` : `More like this`}
        </h2>

        {isMainPage && <CatalogFilter/>}

        <div className="catalog__movies-list">
          {movies.map((movie) =>
            <CatalogCard
              key={movie.id}
              movie={movie}
            />)}
        </div>

        {isMainPage && <ShowMore/>}
      </section>
    );
  }
}

Catalog.defaultProps = {
  movies: [],
  isMainPage: false,
};

Catalog.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isMainPage: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: getFilteredMovies(state),
});

export {Catalog};
export default connect(mapStateToProps)(Catalog);
