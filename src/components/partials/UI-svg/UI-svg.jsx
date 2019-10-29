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

UISvg.propTypes = {
  xlink: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default UISvg;
