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

      const commentsObj = comments.reduce((acc, current, i) => {
        acc[i % 2 ? `even` : `odd`].push(current);
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
