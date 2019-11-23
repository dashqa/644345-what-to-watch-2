import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {compose} from "redux";

import {getFetchingMovies, getFetchingPromo} from "@store/loading/selectors";
import Loader from "@partials/loader/loader";

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

  return WithLoading;
};

const mapStateToProps = (state) => ({
  isLoadingMovies: getFetchingMovies(state),
  isLoadingPromo: getFetchingPromo(state),
});

export default compose(
    connect(mapStateToProps),
    withLoading
);


