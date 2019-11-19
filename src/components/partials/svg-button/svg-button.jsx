import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const SvgButton = ({classMods, title, svgViewBox, svgWidth, svgHeight, svgXlink, onClick}) => {
  const classes = classNames(`btn`, `movie-card__button`, classMods);

  return (
    <button
      className={classes}
      type="button"
      onClick={onClick}
    >
      <svg
        viewBox={svgViewBox}
        width={svgWidth}
        height={svgHeight}
      >
        <use xlinkHref={svgXlink}></use>
      </svg>

      <span>{title}</span>
    </button>
  );
};

SvgButton.defaultProps = {
  classMods: ``,
  title: ``,
  svgViewBox: ``,
  svgWidth: ``,
  svgHeight: ``,
  svgXlink: ``,
  onClick: () => {}
};

SvgButton.propTypes = {
  classMods: PropTypes.string,
  title: PropTypes.string.isRequired,
  svgViewBox: PropTypes.string.isRequired,
  svgWidth: PropTypes.string.isRequired,
  svgHeight: PropTypes.string.isRequired,
  svgXlink: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SvgButton;
