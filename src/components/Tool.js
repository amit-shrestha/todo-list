import React from 'react';
import Proptypes from 'prop-types';
/**
 *
 * @param {*} props
 */
const Tool = props => {
  const { value, onClick } = props;

  /**
   *
   */
  const handleClick = () => onClick();

  return (
    <button className={value} onClick={handleClick}>
      {value}
    </button>
  );
};

Tool.propTypes = {
  value: Proptypes.string,
  onClick: Proptypes.func
};

export default Tool;
