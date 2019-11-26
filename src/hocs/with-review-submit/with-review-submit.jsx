import React from "react";
import {compose} from "recompose";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

import {uploadReview} from "@store/movies-data/actions";
import {getMovieById} from "@store/movies-data/selectors";

const DEFAULT_FORM_RATING = `3`;
const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 400;

const validateForm = ({rating, comment}) => {
  return !!(rating && comment.length >= MIN_REVIEW_LENGTH && comment.length <= MAX_REVIEW_LENGTH);
};

const withReviewSubmit = (Component) => {
  class WithReviewSubmit extends React.PureComponent {
    constructor(props) {
      super(props);

      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);

      this.state = {
        formData: {
          rating: DEFAULT_FORM_RATING,
          comment: ``,
        },
        error: null,
        isValid: false,
      };
    }

    render() {
      const {isValid, formData, error} = this.state;

      return <Component
        {...this.props}
        formData={formData}
        error={error}
        isValid={isValid}
        onChange={this._handleChange}
        onSubmit={this._handleSubmit}
      />;
    }

    _handleChange(evt) {
      const {name, value} = evt.target;

      this.setState((prevState) => {
        const formData = Object.assign({}, prevState.formData);
        formData[name] = value;

        return {
          formData,
          isValid: validateForm(formData)
        };
      });
    }

    _handleSubmit(evt) {
      evt.preventDefault();
      const {onUploadReview, currentMovie, history} = this.props;
      const {formData} = this.state;
      const movieId = currentMovie.id;

      onUploadReview(movieId, formData)
        .then((response) => {
          if (!response.data) {
            const errorObject = JSON.parse(JSON.stringify(response));
            this.setState({error: errorObject.message});
            return null;
          }
          return history.push(`/films/${movieId}`);
        });
    }
  }

  WithReviewSubmit.defaultProps = {
    currentMovie: {
      id: 0,
    },
    history: {},
    onUploadReview: () => {}
  };

  WithReviewSubmit.propTypes = {
    currentMovie: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
    history: PropTypes.object.isRequired,
    onUploadReview: PropTypes.func.isRequired,
  };

  const displayName = Component.displayName || Component.name;
  WithReviewSubmit.displayName = `WithReviewSubmit(${displayName})`;
  WithReviewSubmit.WrappedComponent = Component;

  return WithReviewSubmit;
};

const mapStateToProps = (state, {match}) => ({
  currentMovie: getMovieById(state, match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  onUploadReview: bindActionCreators(uploadReview, dispatch)
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withReviewSubmit
);


