import React, {Fragment} from "react";
import PropTypes from "prop-types";
import TopPage from "../top-page/top-page.jsx";
import BottomPage from "../bottom-page/bottom-page.jsx";

const MainPage = ({movies}) => {
  return (
    <Fragment>
      <TopPage/>
      <BottomPage movies={movies}/>
    </Fragment>
  );
};

MainPage.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MainPage;
