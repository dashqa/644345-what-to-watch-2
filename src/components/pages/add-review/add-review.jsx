import React from "react";
import PropTypes from "prop-types";
import {compose} from "recompose";
import {Link} from "react-router-dom";
import {Fetch} from "@constants";

import UserBlock from "@partials/user-block/user-block";
import MovieCardPoster from "@partials/movie-card-poster/movie-card-poster";
import HeaderLogo from "@partials/header-logo/header-logo";
import MovieCardBackground from "@partials/movie-card-background/movie-card-background";

import withAuthStatus from "@hocs/with-private-route/with-private-route";
import withReviewFormData from "@hocs/with-review-submit/with-review-submit";
import withLoading from "react-redux-hoc-loader";

const AddReview = ({currentMovie, isValid, formData, error, onChange, onSubmit, loaders}) => {
  const {id, name, backgroundImage, posterImage, backgroundColor} = currentMovie;
  const errorStyles = {color: `red`, textAlign: `center`};
  const isUploading = loaders[Fetch.REVIEW].status;

  return (
    <section
      className="movie-card movie-card--full"
      style={{backgroundColor}}>
      <div className="movie-card__header">
        <MovieCardBackground
          name={name}
          backgroundImage={backgroundImage}
        />
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <HeaderLogo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  to={`/films/${id}`}
                  className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <MovieCardPoster
          classMods="movie-card__poster--small"
          name={name}
          posterImage={posterImage}
        />
      </div>

      <div className="add-review">
        {error &&
        <p style={errorStyles}>{error}</p>}

        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {[...new Array(5)].map((_, i) => {
                const index = i + 1;
                const inputId = `star-${index}`;
                return (
                  <React.Fragment key={index}>
                    <input
                      className="rating__input"
                      id={inputId}
                      type="radio"
                      name="rating"
                      value={index}
                      checked={Number(formData.rating) === index}
                      onChange={onChange}
                    />
                    <label
                      className="rating__label"
                      htmlFor={inputId}
                    >
                      {`Rating ${index}`}</label>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="comment"
              id="review-text"
              placeholder="Review text"
              minLength="50"
              maxLength="400"
              onChange={onChange}
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                onClick={onSubmit}
                disabled={!isValid || isUploading}
              >
                Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

AddReview.defaultProps = {
  currentMovie: {
    id: 0,
    name: ``,
    backgroundImage: ``,
    posterImage: ``,
    backgroundColor: ``,
  },
  isValid: false,
  formData: {},
  error: null,
  onChange: () => {},
  onSubmit: () => {},
  loaders: {},
};

AddReview.propTypes = {
  currentMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired
  }),
  isValid: PropTypes.bool.isRequired,
  formData: PropTypes.shape({
    rating: PropTypes.string.isRequired
  }).isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loaders: PropTypes.object
};

export {AddReview};

export default compose(
    withAuthStatus,
    withReviewFormData,
    withLoading(Fetch.REVIEW)
)(AddReview);
