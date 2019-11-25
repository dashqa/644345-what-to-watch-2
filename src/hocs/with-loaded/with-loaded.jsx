import React from 'react';
import PropTypes from "prop-types";

import Loader from "@partials/loader/loader";
import withLoading from "react-redux-hoc-loader";

const withLoaded = (...loadersNames) => (Component) => {
  const WithLoaded = (props) => {
    const {loaders} = props;

    const statuses = Object.values(loaders).map((loader) => loader.status);
    const isLoading = statuses.some((val) => val);

    if (isLoading) {
      return <Loader/>;
    }

    return (
      <Component {...props}/>
    );
  };

  WithLoaded.propTypes = {
    loaders: PropTypes.object,
  };

  const displayName = Component.displayName || Component.name;
  WithLoaded.displayName = `WithLoaded(${displayName})`;
  WithLoaded.WrappedComponent = Component;

  return withLoading(...loadersNames)(WithLoaded);
};

export default withLoaded;
