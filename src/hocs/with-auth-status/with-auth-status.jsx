import React from "react";
import PropTypes from "prop-types";
import {compose} from "redux";
import {connect} from 'react-redux';

import {getUser} from "@store/user-data/selectors";

const withAuthStatus = (Component) => {
  const WithAuthStatus = (props) => {
    const {user, history} = props;
    const authorized = Object.keys(user).length;

    if (!authorized) {
      history.push(`/login`);
      return null;
    }

    return <Component {...props}/>;
  };

  WithAuthStatus.defaultProps = {
    user: {},
    history: {},
  };

  WithAuthStatus.propTypes = {
    user: PropTypes.object,
    history: PropTypes.object,
  };

  return WithAuthStatus;
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export default compose(
    connect(mapStateToProps),
    withAuthStatus
);


