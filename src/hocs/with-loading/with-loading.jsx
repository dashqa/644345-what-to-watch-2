import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Loader from "@partials/loader/loader";
import {getFetchingMovies, getFetchingPromo} from "@store/selectors";

const withLoading = (Component) => {
  const WithLoading = (props) => {
    const {isLoadingMovies, isLoadingPromo, children} = props;

    if (isLoadingMovies || isLoadingPromo) {
      return <Loader/>;
    }

    return (
      <Component {...props}>
        {children}
      </Component>
    );
  };

  WithLoading.defaultProps = {
    isLoadingPromo: false,
    isLoadingMovies: false,
    children: ``,
  };

  WithLoading.propTypes = {
    isLoadingPromo: PropTypes.bool.isRequired,
    isLoadingMovies: PropTypes.bool.isRequired,
    children: PropTypes.node
  };

  const mapStateToProps = (state) => ({
    isLoadingMovies: getFetchingMovies(state),
    isLoadingPromo: getFetchingPromo(state),
  });

  return connect(mapStateToProps)(WithLoading);
};

export default withLoading;


