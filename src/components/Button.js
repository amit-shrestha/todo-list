import React from 'react';
import Proptypes from 'prop-types';

/**
 *
 * @param {*} props
 */
const Button = props => {
  const { onButtonClick, value, activeOption } = props;

  /**
   *
   */
  const handleClick = () => onButtonClick(value);

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
  onButtonClick: Proptypes.func,
  value: Proptypes.string,
  activeOption: Proptypes.string
};

export default Button;
