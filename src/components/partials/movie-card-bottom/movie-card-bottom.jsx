import React from "react";
import PropTypes from "prop-types";
import MovieCardPoster from "../movie-card-poster/movie-card-poster";
import MovieCardTabs from "../movie-card-tabs/movie-card-tabs";
import TabOverview from "../tab-overview/tab-overview";
import TabDetails from "../tab-details/tab-details";
import TabReviews from "../tab-reviews/tab-reviews";

class MovieCardBottom extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: `overview`
    };

    this._handleChangeTab = this._handleChangeTab.bind(this);
  }

  render() {
    const {name, genre, description, released, rating, scoresCount, runTime, posterImage, director, starring, comments = []} = this.props.movie;
    const {activeTab} = this.state;

    return (
      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">

          <MovieCardPoster
            name={name}
            posterImage={posterImage}
            isBig
          />

          <div className="movie-card__desc">
            <MovieCardTabs
              active={activeTab}
              onChangeTab={this._handleChangeTab}
            />

            {(() => {
              switch (activeTab) {
                case `overview`:
                  return (
                    <TabOverview
                      rating={rating}
                      scoresCount={scoresCount}
                      description={description}
                      director={director}
                      starring={starring}
                    />);
                case `details`:
                  return (
                    <TabDetails
                      runTime={runTime}
                      genre={genre}
                      released={released}
                      director={director}
                      starring={starring}
                    />);
                case `reviews`:
                  return (
                    <TabReviews comments={comments}/>
                  );
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }

  _handleChangeTab(tab) {
    this.setState({activeTab: tab});
  }
}

MovieCardBottom.defaultProps = {
  movie: {
    name: ``,
    genre: ``,
    description: ``,
    released: 0,
    rating: 0,
    runTime: 0,
    posterImage: ``,
    director: ``,
    starring: [],
    scoresCount: 0,
    comments: []
  },
};

MovieCardBottom.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    posterImage: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    scoresCount: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
};

export default MovieCardBottom;
