import React from "react";
// import PropTypes from "prop-types";

const Star = ({ step, value, color }) => {
  return (
    <span>
      <i
        style={{ color }}
        className={
          value >= step
            ? "fas fa-star"
            : value >= step - 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    </span>
  );
};

const Rating = ({ value, text, color }) => {
  let stars = [];
  for (let i = 1; i < 6; i++) {
    stars.push(<Star key={i} step={i} value={value} color={color} />);
  }

  return (
    <>
      {stars} <span>{text && text}</span>
    </>
  );
};

Rating.defaultProps = {
  color: "#F8E825",
};

// Rating.propTypes = {
//   value: PropTypes.number.isRequired,
//   text: PropTypes.string.isRequired,
//   color: PropTypes.string,
// };

export default Rating;
