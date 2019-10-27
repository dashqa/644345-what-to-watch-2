import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Catalog from "../../partials/catalog/catalog.jsx";
import MovieCard from "../../partials/movie-card/movie-card.jsx";
import Footer from "../../partials/footer/footer.jsx";

const MainPage = ({movies, promoMovie}) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

MainPage.propTypes = {
  movies: PropTypes.array.isRequired,
  promoMovie: PropTypes.object.isRequired,
};

export default MainPage;
