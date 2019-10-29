import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const UIButton = ({children, classMods, title, onButtonClick}) => {
  return (
    <button
      className={classNames(`btn`, `movie-card__button`, classMods)}
      type="button"
      onClick={onButtonClick}
    >
      {children}

      <span>{title}</span>
    </button>
  );
};

UIButton.propTypes = {
  children: PropTypes.node,
  classMods: PropTypes.arrayOf(PropTypes.string.isRequired),
  title: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default UIButton;
