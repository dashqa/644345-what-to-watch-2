import React, {Fragment} from "react";
import PropTypes from "prop-types";
import MovieCard from "../../partials/movie-card/movie-card.jsx";
import Catalog from "../../partials/catalog/catalog.jsx";
import Footer from "../../partials/footer/footer.jsx";

const MovieDetails = ({movie, relatedMovies}) => {
  return (
    <Fragment>
      <MovieCard
        movie={movie}
        isPromoMovie={false}
      />

      <div className="page-content">
        <Catalog
          movies={relatedMovies}
          isMainCatalog={false}
        />
        <Footer/>
      </div>
    </Fragment>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
  relatedMovies: PropTypes.array.isRequired,
};

export default MovieDetails;
