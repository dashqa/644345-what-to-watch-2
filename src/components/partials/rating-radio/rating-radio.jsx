import React from "react";
import PropTypes from "prop-types";

const RatingRadio = ({id, value, checkedFlag, onChange}) => {
  const isChecked = checkedFlag === value;

  return (
    <>
      <input
        className="rating__input"
        id={id}
        type="radio"
        name="rating"
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <label
        className="rating__label"
        htmlFor={id}
      >
        {`Rating ${value}`}</label>
    </>
  );
};

RatingRadio.defaultProps = {
  id: ``,
  value: 0,
  checkedFlag: null,
  onChange: () => {}
};

RatingRadio.propTypes = {
  id: PropTypes.string,
  value: PropTypes.number,
  checkedFlag: PropTypes.number,
  onChange: PropTypes.func
};

export default RatingRadio;
