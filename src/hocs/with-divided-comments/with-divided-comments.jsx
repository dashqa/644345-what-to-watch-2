import React from "react";
import PropTypes from "prop-types";

const withDividedComments = (Component) => {
  class WithDividedComments extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        dividedComments: {},
      };
    }

    componentDidMount() {
      // const {comments} = this.props;
      const comments = [
        {
          id: 1,
          user: {
            id: 5,
            name: `John Snow`,
          },
          rating: 3.4,
          comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
          date: `2019-05-08T14:13:56.569Z`
        }, {
          id: 2,
          user: {
            id: 5,
            name: `John Snow`,
          },
          rating: 3.4,
          comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
          date: `2019-05-08T14:13:56.569Z`
        }, {
          id: 3,
          user: {
            id: 10,
            name: `Ivan Ivanov`,
          },
          rating: 2.3,
          comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
          date: `2019-05-08T14:13:56.569Z`
        }, {
          id: 4,
          user: {
            id: 22,
            name: `Brad Pitt`,
          },
          rating: 5.3,
          comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
          date: `2019-05-08T14:13:56.569Z`
        }];

      const commentsObj = comments.reduce((acc, current, i) => {
        acc[i % 2 ? `odd` : `even`].push(current);
        return acc;
      }, {odd: [], even: []});

      this.setState({dividedComments: commentsObj});
    }

    render() {
      const {dividedComments} = this.state;

      return <Component
        {...this.props}
        dividedComments={dividedComments}
      />;
    }
  }

  WithDividedComments.deafultProps = {
    comments: [],
  };

  WithDividedComments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
  };

  return WithDividedComments;
};

export default withDividedComments;
