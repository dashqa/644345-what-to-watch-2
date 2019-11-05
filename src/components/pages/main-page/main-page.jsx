import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Catalog from "../../partials/catalog/catalog.jsx";
import MovieCard from "../../partials/movie-card/movie-card.jsx";
import Footer from "../../partials/footer/footer.jsx";

const MainPage = ({movies, promoMovie}) => {
  return (
    <>
      <MovieCard
        movie={promoMovie}
        isMainPage
      />

      <div className="page-content">
        <Catalog
          movies={movies}
          isMainPage
        />
        <Footer/>
      </div>
    </>
  );
};

MainPage.defaultProps = {
  movies: [],
  promoMovie: {},
};

MainPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  promoMovie: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  movies: state.movies,
  promoMovie: state.promoMovie,
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
