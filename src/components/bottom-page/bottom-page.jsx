import React from "react";
import PropTypes from "prop-types";
import Catalog from "./../catalog/catalog.jsx";
import Footer from "./../footer/footer.jsx";

const BottomPage = ({movies}) => {
  return (
    <div className="page-content">
      <Catalog movies={movies}/>
      <Footer/>
    </div>
  );
};

BottomPage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default BottomPage;
