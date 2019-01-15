import React from 'react';
import Proptypes from 'prop-types';
/**
 *
 * @param {*} props
 */
const Button = props => {
  const { onClick, value, activeOption } = props;

  /**
   *
   */
  const handleClick = () => onClick(value);

  return (
    <button
      className={activeOption === value ? 'active' : value}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  onClick: Proptypes.func,
  value: Proptypes.string,
  activeOption: Proptypes.bool
};

export default Button;
