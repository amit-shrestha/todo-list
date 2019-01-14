import React from 'react';

const Tool = props => {
  const { value, onClick } = props;

  const handleClick = () => onClick();

  return (
    <button className={value} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Tool;
