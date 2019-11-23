import React from "react";
import {connect} from "react-redux";

import {getMovieById} from "@store/movies-data/selectors";

const withCurrentMovie = (Component) => {
  const WithCurrentMovie = (props) => {
    return <Component {...props}/>;
  };

  const mapStateToProps = (state, {match}) => ({
    currentMovie: getMovieById(state, match.params.id)
  });

  return connect(mapStateToProps)(WithCurrentMovie);
};

export default withCurrentMovie;
