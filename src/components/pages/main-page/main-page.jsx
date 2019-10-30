import React from "react";
import PropTypes from "prop-types";
import Catalog from "../../partials/catalog/catalog.jsx";
import MovieCard from "../../partials/movie-card/movie-card.jsx";
import Footer from "../../partials/footer/footer.jsx";

const MainPage = ({movies, promoMovie}) => {
  return (
    <>
      <MovieCard
        movie={promoMovie}
        isPromoMovie
      />

      <div className="page-content">
        <Catalog
          movies={movies}
          isMainCatalog
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

export default MainPage;
