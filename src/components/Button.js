import React from 'react';

const Button = props => {
  const { onClick, value, activeOption } = props;

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

export default Button;
