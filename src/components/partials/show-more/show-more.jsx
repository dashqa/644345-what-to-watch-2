import React from "react";
import PropTypes from "prop-types";

const ShowMore = ({onClick}) => {
  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onClick}
      >
        Show more
      </button>
    </div>
  );
};

ShowMore.defaultProps = {
  onClick: () => {}
};

ShowMore.propTypes = {
  onClick: PropTypes.func,
};

export default ShowMore;
