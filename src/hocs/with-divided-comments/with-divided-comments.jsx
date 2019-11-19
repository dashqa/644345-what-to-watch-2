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
