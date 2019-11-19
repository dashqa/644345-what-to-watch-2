import React from "react";
import moment from "moment/moment";
import PropTypes from "prop-types";

const TabReviews = ({dividedComments}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      {Object.entries(dividedComments).map(([key, comments]) => (
        <div
          className="movie-card__reviews-col"
          key={key}
        >
          {comments.map(({id, comment, user, date, rating}) => {
            const commentDate = moment(date);

            return (
              <div
                className="review"
                key={id}
              >
                <blockquote className="review__quote">
                  <p className="review__text">{comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{user.name}</cite>
                    <time className="review__date" dateTime={commentDate.format(`YYYY-MM-DD`)}>
                      {commentDate.format(`MMMM Do, YYYY`)}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{rating}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

TabReviews.deafultProps = {
  dividedComments: {},
};

TabReviews.propTypes = {
  dividedComments: PropTypes.objectOf(
      PropTypes.arrayOf(
          PropTypes.object
      ))
};

export default TabReviews;
