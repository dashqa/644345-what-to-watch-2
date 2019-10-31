import React from "react";
import PropTypes from "prop-types";
import moment from "moment/moment";

class TabReviews extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dividedComments: {},
    };
  }

  componentDidMount() {
    const {comments} = this.props;
    const commentsObj = {
      even: [],
      odd: [],
    };

    comments.forEach((comment, i) => i % 2 ? commentsObj.odd.push(comment) : commentsObj.even.push(comment));
    this.setState({dividedComments: commentsObj});
  }

  render() {
    const {dividedComments} = this.state;

    return (
      <div className="movie-card__reviews movie-card__row">
        {Object.entries(dividedComments).map(([key, comments]) => (
          <div
            className="movie-card__reviews-col"
            key={key}
          >
            {comments.map(({id, comment, user, date, rating}) => (
              <div
                className="review"
                key={id}
              >
                <blockquote className="review__quote">
                  <p className="review__text">{comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{user.name}</cite>
                    <time className="review__date" dateTime={moment(date).format(`YYYY-MM-DD`)}>
                      {moment(date).format(`MMMM Do, YYYY`)}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{rating}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

TabReviews.deafultProps = {
  comments: [],
};

TabReviews.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};

export default TabReviews;
