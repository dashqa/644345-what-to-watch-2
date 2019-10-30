import React from "react";
import PropTypes from "prop-types";

const UISvg = ({xlink, viewBox, width, height}) => {
  return (
    <svg
      viewBox={viewBox}
      width={width}
      height={height}
    >
      <use xlinkHref={xlink}></use>
    </svg>
  );
};

UISvg.defaultProps = {
  xlink: ``,
  viewBox: ``,
  width: ``,
  height: ``,
};

UISvg.propTypes = {
  xlink: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default UISvg;
