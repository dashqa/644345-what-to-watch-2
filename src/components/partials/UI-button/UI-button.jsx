import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const UIButton = ({classMods, svg, svgViewBox, svgWidth, svgHeight, title, onButtonClick}) => {
  return (
    <button
      className={classNames(`btn`, `movie-card__button`, classMods)}
      type="button"
      onClick={onButtonClick}
    >
      <svg
        viewBox={svgViewBox}
        width={svgWidth}
        height={svgHeight}
      >
        <use xlinkHref={svg}></use>
      </svg>
      <span>{title}</span>
    </button>
  );
};

UIButton.propTypes = {
  classMods: PropTypes.arrayOf(PropTypes.string.isRequired),
  svg: PropTypes.string.isRequired,
  svgViewBox: PropTypes.string.isRequired,
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default UIButton;
