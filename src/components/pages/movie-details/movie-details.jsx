import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";
import {bindActionCreators} from "redux";
import {Fetch} from "@constants";

import {getComments, getMovieById, getRelatedMovies} from "@store/movies-data/selectors";
import {loadComments} from "@store/movies-data/actions";

import Catalog from "@partials/catalog/catalog";
import Footer from "@partials/footer/footer";
import Header from "@partials/header/header";
import MovieCardBackground from "@partials/movie-card-background/movie-card-background";
import MovieCardPoster from "@partials/movie-card-poster/movie-card-poster";
import MovieCardTabs from "@partials/movie-card-tabs/movie-card-tabs";
import MovieCardInfo from "@partials/movie-card-info/movie-card-info";
import MovieButtons from "@partials/movie-buttons/movie-buttons";

import withLoaded from "@hocs/with-loaded/with-loaded";

class MovieDetails extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onLoadComments, currentMovie, comments} = this.props;
    if (!comments.length) {
      onLoadComments(currentMovie.id);
    }
  }

  componentDidUpdate(prevProps) {
    const {onLoadComments, currentMovie, comments} = this.props;
    console.log('prevProps.currentMovie.id: ', prevProps.currentMovie.id);
    console.log('currentMovie.id: ', currentMovie.id);
    console.log('comments: ', comments);
    if (prevProps.currentMovie.id !== currentMovie.id) {
      onLoadComments(currentMovie.id);
    }
  }

  render() {
    const {currentMovie, relatedMovies, comments} = this.props;
    const {id, name, backgroundImage, posterImage, genre, released, backgroundColor, isFavorite} = this.props.currentMovie;

    return (
      <>
        <section
          className="movie-card movie-card--full"
          style={{backgroundColor}}
        >
          <div className="movie-card__hero">
            <MovieCardBackground
              name={name}
              backgroundImage={backgroundImage}
            />

            <h1 className="visually-hidden">WTW</h1>

            <Header
              classMods="movie-card__head"
              needUserBlock
            />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <MovieCardInfo
                  name={name}
                  genre={genre}
                  released={released}
                />
                <MovieButtons
                  movieId={id}
                  isFavorite={isFavorite}
                />
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">

              <MovieCardPoster
                classMods="movie-card__poster--big"
                name={name}
                posterImage={posterImage}
              />

              <MovieCardTabs
                movie={currentMovie}
                comments={comments}
              />
            </div>
          </div>
        </section>

        <div className="page-content">
          <Catalog
            movies={relatedMovies}
            sectionClassMods="catalog--like-this"
            sectionTitle="More like this"
          />
          <Footer/>
        </div>
      </>
    );
  }
}

MovieDetails.defaultProps = {
  currentMovie: {},
  relatedMovies: [],
  comments: [],
  onLoadComments: () => {},
};

MovieDetails.propTypes = {
  currentMovie: PropTypes.object.isRequired,
  relatedMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object),
  onLoadComments: PropTypes.func.isRequired,
};

const mapStateToProps = (state, {match}) => {
  const currentMovie = getMovieById(state, match.params.id);

  return {
    currentMovie,
    relatedMovies: getRelatedMovies(state, currentMovie),
    comments: getComments(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadComments: bindActionCreators(loadComments, dispatch)
});

export {MovieDetails};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withLoaded(Fetch.MOVIES, Fetch.COMMENTS)
)(MovieDetails);
