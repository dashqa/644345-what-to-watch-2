import React from "react";
import PropTypes from "prop-types";

const SvgButton = ({classes, title, svgViewBox, svgWidth, svgHeight, svgXlink, onClick}) => {
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
  classes: ``,
  title: ``,
  svgViewBox: ``,
  svgWidth: ``,
  svgHeight: ``,
  svgXlink: ``,
  onClick: () => {}
};

SvgButton.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string.isRequired,
  svgViewBox: PropTypes.string.isRequired,
  svgWidth: PropTypes.string.isRequired,
  svgHeight: PropTypes.string.isRequired,
  svgXlink: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SvgButton;
