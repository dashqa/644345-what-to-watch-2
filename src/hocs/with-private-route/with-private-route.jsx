import React from "react";
import PropTypes from "prop-types";
import {compose} from "redux";
import {connect} from 'react-redux';

import {getAuthStatus} from "@store/user-data/selectors";

const withPrivateRoute = (Component) => {
  const WithPrivateRoute = (props) => {
    const {authorized, history} = props;

    if (!authorized) {
      history.push(`/login`);
      return null;
    }

    return <Component {...props}/>;
  };

  WithPrivateRoute.defaultProps = {
    authorized: false,
    history: {},
  };

  WithPrivateRoute.propTypes = {
    authorized: PropTypes.bool,
    history: PropTypes.object,
  };

  const displayName = Component.displayName || Component.name;
  WithPrivateRoute.displayName = `WithPrivateRoute(${displayName})`;
  WithPrivateRoute.WrappedComponent = Component;

  return WithPrivateRoute;
};

const mapStateToProps = (state) => ({
  authorized: getAuthStatus(state),
});

export default compose(
    connect(mapStateToProps),
    withPrivateRoute
);


