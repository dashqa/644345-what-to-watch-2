import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const UIButton = ({children, classMods, title, onClick}) => {
  return (
    <button
      className={classNames(`btn`, `movie-card__button`, classMods)}
      type="button"
      onClick={onClick}
    >
      {children}

      <span>{title}</span>
    </button>
  );
};

UIButton.defaultProps = {
  children: ``,
  classMods: ``,
  title: ``,
  onClick: () => {}
};

UIButton.propTypes = {
  children: PropTypes.node,
  classMods: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default UIButton;
